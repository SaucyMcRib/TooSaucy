google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['M&M\'s', 'Defect Count'],
    ['No defect', 72],
    ['Defect', 28]
  ]);

  var options = {
    title: 'Count of Defects',
    backgroundColor: 'transparent'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
