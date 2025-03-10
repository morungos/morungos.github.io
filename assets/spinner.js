// DATA
const rawData = [
  {
    "ticker": "CHEESE"
  },
  {
    "ticker": "MAPLE SYRUP"
  },
  {
    "ticker": "MEXICAN CARTELS"
  },
  {
    "ticker": "SPRAY TAN"
  },
  {
    "ticker": "POTATOES"
  },
  {
    "ticker": "MIKE MYERS"
  },
  {
    "ticker": "POUTINE"
  },
  {
    "ticker": "RAW EARTH"
  },
  {
    "ticker": "BACON"
  },
  {
    "ticker": "FENTANYL"
  },
  {
    "ticker": "KILLER GEESE"
  },
  {
    "ticker": "BEAVERS"
  },
  {
    "ticker": "PINEAPPLE PIZZA"
  },
  {
    "ticker": "SNOW"
  },
  {
    "ticker": "APOLOGIZING"
  },
  {
    "ticker": "YOGA PANTS"
  },
  {
    "ticker": "KEVIN O'LEARY"
  },
];

// DOM ELEMENTS
const box = document.querySelector('.difficulty__buttons');
const buttons = Array.from(document.getElementsByClassName('difficulty__button'));
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.closeBtn');

// DATA
let data = getData();

// PURE FUNCTIONS
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

// SYNC FUNCTIONS
function render() {
    const chartNode = d3.select('#spinner').node()
    const padding   = { top: 0, right: 0, bottom: 0, left: 0};
    const width     = chartNode.clientWidth - padding.left - padding.right;
    const height    = chartNode.clientHeight - padding.top - padding.bottom;
    const radius    = Math.min(width, height) / 2;
    const spins     = 3;
    const degrees   = spins * 360;
    const color     = d3.scaleOrdinal(["#e5dff6","#e5f6df","#dfe5f6","#ebd4f3", "#f6f0df"]);
    let counter     = 0;

    // let fontSize;
    // if(data.length > 50) {
    //     fontSize = '10px';
    // } else {
    //     fontSize = '18px';
    // }

    let svg = d3.select('#spinner').selectAll('svg').data([null]);
    svg = svg
        .enter()
        .append('svg')
        .merge(svg)
        .data([data])
            .attr('width', width)
            .attr('height', height);

    svg.selectAll('g').remove()
    
    const container = svg.append('g')
        .attr('class', 'chartcontainer')
        .attr('transform', `translate(${width/2 + padding.left},${height/2 + padding.top})`);
    
    const wheel = container.append('g')
        .attr('class', 'wheel');
    
    const pie = d3.pie().sort(null).value(function(d){return 1;});
    
    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);
    
    const arcs = wheel.selectAll('g.slice')
        .data(pie)
        .enter()
        .append('g')
            .attr('class', 'slice');
    
    arcs.append('path')
        .attr('fill', function(d,i){return color(i);})
        .attr('d', function(d){return arc(d);});
    
    arcs.append("text").attr("transform", function(d){
        d.innerRadius = 0;
        d.outerRadius = radius;
        d.angle = (d.startAngle + d.endAngle)/2;
        return `rotate(${(d.angle * 180 / Math.PI - 90)})translate(${d.outerRadius -15}, 6)`;
    })
        .attr("text-anchor", "end")
        .text( function(d, i) {
            return data[i].ticker;
        })
        // .style('font-size', fontSize);
    
    // arrow
    svg.append('g')
            .attr('class', 'arrow')
            .attr('transform', `translate(${(width + padding.left + padding.right)/2 - 15})`)
        .append('path')
            .attr('d', `M0 0 H30 L 15 ${Math.sqrt(3)/2*30}Z`)
            .style('fill', '#000809');
    
    // push button
    const push = d3.select('#push');
    
    push.on('click', spin);
    
    // FUNCTIONS
    function spin(d){
        counter++;
    
        const piedegree         = 360 / data.length;
        const randomAssetIndex  = getRandomInt(0, data.length);
        const randomPieMovement = getRandomInt(1, piedegree);
        
        rotation = (data.length - randomAssetIndex) * piedegree - randomPieMovement + degrees;
    
        wheel.transition()
            .duration(3000)
            .attrTween('transform', rotTween)
            .ease(d3.easeCircleOut)
            .on('end', function(){

                const percentages = [
                    "10%", "25%", "50%", "100%", "200%", "500%"
                ]
                const selectedIndex = Math.floor(Math.random() * percentages.length)
                const selected = percentages[selectedIndex]
    
                let result = d3.select('#result').data([null]);
                result = result
                    .enter()
                    .append('text')
                        .attr('class', 'result')
                    .merge(result)
                        .text("BREAKING: TRUMP ANNOUNCES " + selected + " TARIFF ON " + data[randomAssetIndex].ticker)
                        // .style('font-size', '30px')
                        .style('font-weight', '700');
            });
    }
    
    function rotTween() {
        let i = d3.interpolate(0, rotation);
        return function(t) {
            return `rotate(${i(t)})`;
        };
    }
}

function getData() {
    return rawData;
}

function updateSelection(e) {
    // buttons.forEach(button => {
    //     button.classList.remove('current');
    // });

    // if(e.target.classList.contains('difficulty__button')) {
    //     e.target.classList.add('current');
    // }

    render();
}

// function closeModal() {
//     modal.style.display = 'none';
// }

// function outsideClick(e) {
//     if(e.target == modal) {
//         modal.style.display = 'none';
//     }
// }

// EVENT LISTENERS
// // // box.addEventListener('click', updateSelection);
// // closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);
window.onload = render;

const resizeObserver = new ResizeObserver((entries) => {
    render()
})

resizeObserver.observe(document.getElementById("spinner").firstElementChild)