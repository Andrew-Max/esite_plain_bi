// =============================
  // bar graph
// =============================
var data = [13, 18, 56, 982];
var chart = d3.select('.chart')
debugger
chart.selectAll('div')
  .data(data)
    .enter()
    .append('div')
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });
