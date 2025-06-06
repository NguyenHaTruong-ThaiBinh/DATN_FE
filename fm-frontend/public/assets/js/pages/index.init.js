import ApexCharts from 'apexcharts';
var chart = {
    series: [
      {
        name: 'Income',
        data: [2.7, 2.2, 1.3, 2.5, 1, 2.5, 1.2, 1.2, 2.7, 1, 3.6, 2.1],
      },
      {
        name: 'Expense',
        data: [
          -2.3, -1.9, -1, -2.1, -1.3, -2.2, -1.1, -2.3, -2.8, -1.1, -2.5, -1.5,
        ],
      },
    ],
    chart: {
      toolbar: { show: !1 },
      type: 'bar',
      fontFamily: 'inherit',
      foreColor: '#adb0bb',
      height: 370,
      stacked: !0,
      offsetX: -15,
    },
    colors: ['var(--bs-success)', 'rgba(155, 171, 187, .25)'],
    plotOptions: {
      bar: {
        horizontal: !1,
        barHeight: '80%',
        columnWidth: '20%',
        borderRadius: [3],
      },
    },
    dataLabels: { enabled: !1 },
    legend: { show: !1 },
    grid: {
      show: !0,
      strokeDashArray: 3,
      padding: { top: 0, bottom: 0, right: 0 },
      borderColor: 'rgba(0,0,0,0.05)',
      xaxis: { lines: { show: !0 } },
      yaxis: { lines: { show: !1 } },
    },
    yaxis: {
      tickAApprox: 4,
      labels: {
        show: !0,
        formatter: function (e) {
          return '$' + e + 'k';
        },
      },
    },
    xaxis: {
      axisBorder: { show: !1 },
      axisTicks: { show: !1 },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  },
  options =
    ((chart = new ApexCharts(
      document.querySelector('#reports'),
      chart
    )).render(),
    {
      series: [76],
      chart: { type: 'radialBar', offsetY: -20, sparkline: { enabled: !0 } },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          hollow: { size: '75%', position: 'front' },
          track: {
            background: ['rgba(42, 118, 244, .18)'],
            strokeWidth: '80%',
            opacity: 0.5,
            margin: 5,
            lineCap: 'round',
          },
          dataLabels: {
            name: { show: !1 },
            value: { offsetY: -2, fontSize: '20px' },
          },
        },
      },
      stroke: { lineCap: 'round' },
      colors: ['var(--bs-primary)'],
      grid: { padding: { top: -10 } },
      labels: ['Average Results'],
    }),
  options =
    ((chart = new ApexCharts(
      document.querySelector('#cashflow'),
      options
    )).render(),
    {
      chart: { height: 280, type: 'donut' },
      plotOptions: { pie: { donut: { size: '80%' } } },
      dataLabels: { enabled: !1 },
      stroke: { show: !0, width: 2, colors: ['transparent'] },
      series: [50, 25, 10, 15],
      legend: {
        show: !0,
        position: 'bottom',
        horizontalAlign: 'center',
        verticalAlign: 'middle',
        floating: !1,
        fontSize: '13px',
        fontFamily: 'Be Vietnam Pro, sans-serif',
        offsetX: 0,
        offsetY: 0,
      },
      labels: ['USD', 'Euro', 'Pounds', 'Dinar'],
      colors: ['#0e2a89', '#d96345', '#ffb600', '#47cdea'],
      responsive: [
        {
          breakpoint: 600,
          options: {
            plotOptions: { donut: { customScale: 0.2 } },
            chart: { height: 240 },
            legend: { show: !1 },
          },
        },
      ],
      tooltip: {
        y: {
          formatter: function (e) {
            return e + ' %';
          },
        },
      },
    });
(chart = new ApexCharts(document.querySelector('#balance'), options)).render();
