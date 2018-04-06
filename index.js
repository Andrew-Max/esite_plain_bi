// =============================
  // bar graph
// =============================

var createBarGraph = function() {
  var data = [13, 18, 56, 143];
  var chart = d3.selectAll('.chart')
  chart.selectAll('div')
    .data(data)
      .enter()
      .append('div')
      .style("width", function(d) { return d + "px"; })
      .text(function(d) { return d; });
}


var createMainDiv = function() {
  var height = window.innerHeight.toString();
  d3.select('.main-container')
  .style('height', (height + 'px'))
};

function initMap() {}

$(() => {
  initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
})

var createPieChart = function() {
  var chart = c3.generate({
    bindto: '#pie-chart-1',
    data: {
        columns: [
          ['data1', 30, 3, 14, 0.3, 0.3],
          ['data2', 120],
          ['data3', 20, 40.4, 28, 17],
          ['data4', 120, 34, 148.38]
        ],
        type : 'pie',
    }
  });
}

var createBarChart = function () {
  var chart = c3.generate({
    bindto: '#bar-chart-1',
    data: {

      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
      ],
      type: 'bar'
    },
    bar: {
      width: {
        ratio: 0.9 // this makes bar width 50% of length between ticks
      }
    }
  });
}



createWordCloud()
createBarChart();
createPieChart();
createMainDiv();
createBarGraph();
initMap();


