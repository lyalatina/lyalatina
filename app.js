

  // pie Chart
  var ctxP = document.getElementById('pieChart').getContext('2d');
  var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
      labels: ['Apple iphone', 'Samsung SM-J700M Galaxy J7 2015'],
      datasets: [
        {
          data: [3.9, 61.6],
          backgroundColor: ['#9232B3', '#56D9C9', '#FDB45C', '#949FB1', '#4D5360'],
          hoverBackgroundColor: ['#c564e6', '#83f7ea', '#FFC870', '#A8B3C5', '#616774'],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load
  ('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });



