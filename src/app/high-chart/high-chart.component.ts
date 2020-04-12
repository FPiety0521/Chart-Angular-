import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import ExportingModule from 'highcharts/modules/exporting';
ExportingModule(Highcharts);

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {
  
  chart: Chart;
  chart1: Chart;







  init() {


var chart = Highcharts.chart('container', {

    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2017'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
         type: 'line',
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
       type: 'line',
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
       type: 'line',
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
       type: 'line',
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
       type: 'line',
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});





    this.chart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Stacked bar chart'
      },
      xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Total fruit consumption'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal'
        }
      },
      series: [
        {
          name: 'John',
          data: [5, 3, 4, 7, 2],
          type: 'bar'
        },
        {
          name: 'Jane',
          data: [2, 2, 3, 2, 1],
          type: 'bar'
        },
        {
          name: 'Joe',
          data: [3, 4, 4, 2, 5],
          type: 'bar'
        }
      ]
     
    }
  );

  }

  ngOnInit() {
    this.init();
    console.log('on init');
    this.chart.ref$.subscribe(chart => {
      console.log(chart);
    });
  }

  ngAfterViewInit() {
    console.log('after view init');
    this.chart.ref$.subscribe(chart => {
      console.log(chart);
    });
  }
}
