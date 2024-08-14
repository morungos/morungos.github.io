---
layout: post
title: 'Stuart’s guide to high-availability services on a budget'
author: Stuart
background: '/img/posts/slidey0136.jpg'
summary: |-
  A blog post on the how we put together a lightweight high-availability 
  platform, without all the burdensome complexities.
tagline: |-
  Do you need to put together a high-availability application platform on 
  a budget? This post is for you
image: '/img/posts/slidey0136.jpg'
image_description: |-
  Quiraing, on the Isle of Skye, with mists in the foreground, and a little wisp of cloud above
---

One of the challenges of cloud hosting is keeping the costs down. There are just
so many moving parts, and costs very quickly mount up. And if you, like me,
often get approached by companies who want to cut your AWS bills, you can
read on, because I had a lot of these, and none of them could shave off even a
cent or two. 

Yes, I really am that cheap, and so, welcome to <b><i>Stuart’s guide to high-availability services on a budget</i></b>, how to build a complete, private,
high-availability platform on a budget. 

## Our basic requirements

What we needed was the following:

* **High availability, relatively speaking** -- i.e., the goal wasn't absolute 100% 
  uptime at any cost, the risk of an entire data centre going down was low enough
  that we didn't attempt to span data centres, although we would have done if we'd 
  scaled further. However, loss of a single server causing compete loss of service 
  would have been entirely unacceptable.
* **A mixture of both static pages and API services** -- although our systems
  did need to manage multiple subdomains, some of them were simple static pages,
  others were live APIs -- three major APIs, in fact, with slightly different 
  performance demands
* **Persistent storage with replication** -- it was important that a single server loss
  would not cause data loss; some of the data was quite valuable and personal, so we
  needed to be responsible about taking care of it
* **Able to do rolling updates** -- we needed to be able to upgrade both static
  content and systems relatively often, and without taking down services for
  more than a second or two at the worst

In addition to all of these, we needed to be relatively performant. The APIs provided
services to a Chrome extension, and it was entirely possible to have several hundred
concurrent users sending API requests at the platform every second or so. 

### Decisions, decisions...

At this point, we had a lot of options, so we needed to make some decisions to
focus the design. The most pressing issues were as follows:

* **Kubernetes, or not Kubernetes?** -- the first question was: should we just
  bite the bullet, and embrace Kubernetes? In some ways, this was appealing, but
  it adds a massive amount of complexity -- and pushes costs up a huge amount.
  Kubernetes involves several services, and its primary nodes require 2Gb of RAM
  before you even start on the application, and you'll need multiple for high
  availability. It is great for scaling, but it's even better for cloud hosting
  providers, as they can bill you for more stuff. So, we dumped Kubernetes from
  the start. That puts the burden of managing some things onto us, but we can
  live with that.
* **Who manages the database?** -- the easiest option was to delegate database
  provision to the cloud provider. We used Digital Ocean, and for $50/mo, they'd
  handle all the database issues for us. That's quite appealing, as they worry
  about backups and outages, mostly. They did a good job, but that's a lot, and
  when our free credits ran out, it started to hurt. So we decided to run our
  own database cluster. We don't need a lot of database anyway -- I'll come to
  that later -- so we could overlay a micro DB server within each application
  server, and still have plenty of room. 
* **Which database?** -- next, what database do we use? We'd originally started
  with MariaDB, which works pretty well. It's not as awful as MySQL about
  licensing, but clustering MariaDB is painful. Very painful. You have no idea
  how painful. So we switched to PostgreSQL. Since all our application code used
  `knex.js` (I do not enjoy ORMs, and query building DSLs work very well for me)
  the code didn't need to change at all. So we switched to PostgreSQL, and I
  never regretted it. Clustering was very much easier -- so was backup, and
  security for that matter.
* **But performance?** -- one of the harder challenges was: some of the APIs
  need light access to data, and if we hit peak loads, PostgreSQL was a
  bottleneck. So, somewhat naively, we added in Redis, and overlaid a second
  Redis cluster across all the application servers. Mostly, Redis was used as a
  straight cache for both reading and writing to PostgreSQL, therefore, again
  the data quantity was not too high to cause memory issues, we flushed data
  every minute or so. That meant we were doing bulk writes occasionally, rather
  than instant writes constantly. In theory that would be a data loss risk, but
  by clustering Redis, that risk was essentially zero. As a bonus feature, a
  Redis cluster can also provide a very handy cross-cluster locking feature,
  which was very handy when we needed to do, for example, sending emails -- the
  last thing we needed was multiple servers sending emails at the same time.

## The basic setup

With this lot in place, our basic setup looked much like this, in broad terms. 
The main entry point was a basic Digital Ocean load balancer, with two nodes
running health checks against a pool of identical application nodes. We *could*
have built our own load balancer, but Digital Ocean's cost the same as two nodes
anyway, so it would not have saved us all that much.

<figure class="figure w-75">
  <img class="img-fluid" src="/img/posts/cluster-architecture.png" 
       alt="Chart of bias effects by temperature">
    <figcaption class="figure-caption">
    Overview of the basic cluster architecture.
    </figcaption>
</figure>

Each application server handled incoming requests through `nginx`. Note that the
load balancer didn't terminate SSL, we passed through the connections. Generally,
I wouldn't have trusted our private data exposed that way. I only wanted our
customers' data to be unencrypted within a server, not between them. The only data
transmitted between servers is between the `Redis` worker nodes and the `PostgreSQL`
worker nodes, and we made sure they were encrypted, if necessary using SSL tunnels.

Back to `nginx`. `nginx` would handle incoming requests, and if static, serve
them directly, with mirrored copies of all static resources on all servers. If dynamic,
they were reverse-proxied onto a suite of worker processes, which were implemented
using `Node.js`, and managed by `systemd` for restarts. These did the actual 
application work. One interesting service was the "health-check" endpoint, which was
involved every few seconds by the load balancers. This checked database status and 
a few other things. This was the only endpoint that ran on HTTP/80, because that 
was what the load balancer needed, and it didn't return any information anyway. 

For a complete list, all the application servers included the following:

* A Debian-based operating system
* One member of a Redis and Redis Sentinel cluster
* One member of a PostgreSQL cluster
* An `nginx` reverse proxy setup for SSL termination and logging
* SSL tunnels for secure connections between servers
* Two (usually) application worker processes, running Node.js and managed by `systemd`
* Some security infrastructure, notably `fail2ban` and `samhain`
* Off-site backup systems for recovery
* An `rsyslog` relay system, which would mirror a node's logs across the cluster,
  in case of file system loss 
* Periodic `systemd` tasks for sending emails, renewing certificates, and so on

So, note, we're not using Kubernetes, there's docker, there's no containers, and
there's no heavy infrastructure. As it stands, and somewhat surprisingly, the
whole thing (with some caveats) fits quite comfortably into a 1Gb application
server with 20Gb of storage. That's because a lot of these things (e.g.,
`rsyslog`, `systemd`) are light and standard, and others, like `nginx` and even
Node.js, are economical. Digital Ocean provides these 1Gb nodes for around
$5/mo, so the whole setup is around $25/mo. Not bad for a close-to
high-availability private setup, and not far off the cost of a single Kubernetes
master node.

## How it works in practice

* **Updates** -- A rolling update is pretty simple. We used Ansible to manage
  the process, and it would iterate through the application servers, for each
  one, removing it from the load balancer, updating it, and the adding it back
  to the load balancer. That is fine for the application worker processes, which
  can simply be restarted. Data schemas have to be handled differently, because
  the databases are all clustered anyway, so generally that only needs to be run
  once as a migration script.

* **Outages** -- If we lose a server, we can relatively simply deploy a new one,
  and add it back into our cluster. It takes a little time for the Redis and
  PostgreSQL data to synchronize, but thanks to the clustering, in the meantime,
  the application processes on Server 1 can use the databases on Server 2 or
  Server 3, and that's all handled for us. Note that we don't need to add it back
  into the load balancer until it is caught up. There is a small risk of a second
  outage before we are completely synchronized, but that level of risk is always
  going to cost a lot more to handle.

* **Backups** -- In our design, Redis is used for two things: caching, and
  cluster-wide locking[^RedisLocks]. Neither of these require us to back up the
  Redis data, at all. So all the critical data we need is in PostgreSQL. We
  wanted an hourly off-site backup, so even in the event of an entire data
  centre being lost irretrievably, the most we'd lose was an hour's
  data.[^RaspberryBackup].
  The actual backup process should not really surprise anyone. We did daily full 
  backups and hourly incremental ones, which were relatively small, and mirrored 
  three full backups and ten incremental ones to a cloud backup storage, where
  it conveniently fitted into the free storage plan.

[^RedisLocks]:
    One of the more useful features of Redis is that we can easily create a 
    mutually exclusive lock, so that, for example, two application servers
    don't try to do a backup at the same time.

[^RaspberryBackup]: In another cunning ploy, we did have a proof-of-concept for
    a live offsite mirror, using a Raspberry Pi in my house, run as a streaming
    replica of the cluster. This had some definite advantages: we had a more or
    less live data replica in another physical location, and running backups off
    *that* rather than any of the application servers kept some of the load on 
    the main database servers down. We didn't have very high loads, so that was
    not a pressing issue, but it worked surprisingly well.

* **JavaScript packaging** -- Initially we used `npm` for managing Javascript packages, but
  it was easily the most broken component in the entire setup, commonly (and often randomly)
  running out of memory on a 1Gb machine. Switching to `yarn` avoided these
  issues. We also used a local Node.js, rather than a Debian-provided one, to
  ensure that the deployed version was stable.

* **Deployment** -- Deployment was done using Ansible, which doesn't require an
  agent running on a server. The full playbook was definitely complex, because
  both of the database clusters needed to be configured properly to be aware of 
  their peers, and this was not trivial. Also, the Ansible plays worked in phases,
  so that the common scenario of an update to the worker API processes worked 
  smoothly, temporarily dropping out an application node, updating it (which
  could include JavaScript package dependencies) before adding it back in. The basic
  process was actually simple: blocks of parallel updates across the cluster, but
  critical parts run sequentially, as loops through application nodes, with 
  each removed and re-added from the load balancer.


## Security

We took security seriously. We were potentially handling some really very
confidential data, although we did not store it (privacy by design was central
to the whole approach). Even so, it was passing through the internal processes,
so we needed to be responsible. The main security steps we took were as follows:

* All SSL switched to use asymmetric keys, all passwords disabled
* `Fail2ban`, to track network requests, and dynamically block IPs that behaved
  badly
* A significant set of custom nginx filters, tweaked to handle bot attack
  patterns that we observed
* Very restrictive firewalling, from the load balancer, only allowing port
  443, with port 80 only opened for the SSL ACME processing and load balancer health
  checks
* A `samhain` intrusion detection system, running hourly to detect file system
  interference

## Notes

* footnotes will be placed here. This line is necessary
{:footnotes}
