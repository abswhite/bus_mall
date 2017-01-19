'use strict';

var context = document.getElementById('product-chart').getContext('2d');

var chartData = [100, 200, 300, 50, 10];
var chartColors = ['blue','red','yellow','orange','green'];
var chartLabels = ['Adam', 'Jen', 'Chris', 'Lisa', 'Dan'];

var chartOptions = {
  responsive: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// var chartOptions = {};
// chartOptions.scales.yAxes.ticks.beginAtZero = true;

var myFirstChart = new Chart(context, {
  type: 'bar',
  data: {
    labels: chartLabels,
    datasets: [{
      label: '# of votes for each color',
      data: chartData,
      backgroundColor: chartColors
    }]
  },
  options: chartOptions

});
