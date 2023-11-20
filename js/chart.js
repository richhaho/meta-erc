//show hard coded chart from example data
//set up svg using margin conventions - we'll need plenty of room on the left for labels
var margin = {
    top: 15,
    right: 120,
    bottom: 15,
    left: 60
};

var graphicWidth=$("#graphic").width();
    
var width = graphicWidth - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var svg = d3.select("#graphic").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var data = [
    {
        "key": "2r",
        "value": 2,
    },
    {
        "key": "j1e",
        "value": 1,
    },
    {
        "key": "ga3ng",
        "value": 3,
    },
    {
        "key": "2lu5",
        "value": 25,
    },
    {
        "key": "sn13k",
        "value": 13,
    },
    {
        "key": "s5rvi35",
        "value": 535,
    },
    {
        "key": "s1dn5ss",
        "value": 15,
    },
    {
        "key": "father",
        "value": 414,
    },
    {
        "key": "3riti3",
        "value": 33,
    },
    {
        "key": "sk1t5",
        "value": 15,
    },
    {
        "key": "gli45",
        "value": 45,
    },
    {
        "key": "4onk5y",
        "value": 45,
    },
    {
        "key": "s3out",
        "value": 3,
    },
    {
        "key": "hol4",
        "value": 4,
    },
    {
        "key": "5ntir5",
        "value": 55,
    }
];

//sort bars based on value
data = data.sort(function (a, b) {
    return d3.ascending(a.value, b.value);
})    
var x = d3.scale.linear()
    .range([0, width])
    .domain([0, d3.max(data, function (d) {
        return d.value;
    })]);

var y = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .1)
    .domain(data.map(function (d) {
        return d.name;
    }));

//make y axis to show bar names
var yAxis = d3.svg.axis()
    .scale(y)
    //no tick marks
    .tickSize(0)
    .orient("left");

var gy = svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)

var bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("g")

//append rects
bars.append("rect")
    .attr("class", "bar")
    .attr("y", function (d) {
        return y(d.name);
    })
    .attr("height", y.rangeBand())
    .attr("x", 0)
    .attr("width", function (d) {
        return x(d.value);
    });

//add a value label to the right of each bar
bars.append("text")
    .attr("class", "label")
    //y position of the label is halfway down the bar
    .attr("y", function (d) {
        return y(d.name) + y.rangeBand() / 2 + 4;
    })
    //x position is 3 pixels to the right of the bar
    .attr("x", function (d) {
        return x(d.value) + 3;
    })
    .text(function (d) {
        return d.value;
    });

$( window ).resize(function() {
$( "#graphic" ).empty();
  var graphicWidth=$("#graphic").width();
  var margin;
  if (graphicWidth<=200){
    margin= {
    top: 15,
    right: 60,
    bottom: 15,
    left: 50
   };  
    } else{
        margin= {
    top: 15,
    right: 120,
    bottom: 15,
    left: 60
   };  
    }
    
  var width = graphicWidth - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var svg = d3.select("#graphic").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scale.linear()
    .range([0, width])
    .domain([0, d3.max(data, function (d) {
        return d.value;
    })]);

var y = d3.scale.ordinal()
    .rangeRoundBands([height, 0], .1)
    .domain(data.map(function (d) {
        return d.name;
    }));

//make y axis to show bar names
var yAxis = d3.svg.axis()
    .scale(y)
    //no tick marks
    .tickSize(0)
    .orient("left");

var gy = svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)

var bars = svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("g")

//append rects
bars.append("rect")
    .attr("class", "bar")
    .attr("y", function (d) {
        return y(d.name);
    })
    .attr("height", y.rangeBand())
    .attr("x", 0)
    .attr("width", function (d) {
        return x(d.value);
    });

//add a value label to the right of each bar
bars.append("text")
    .attr("class", "label")
    //y position of the label is halfway down the bar
    .attr("y", function (d) {
        return y(d.name) + y.rangeBand() / 2 + 4;
    })
    //x position is 3 pixels to the right of the bar
    .attr("x", function (d) {
        return x(d.value) + 3;
    })
    .text(function (d) {
        return d.value;
    });
});



























































































































