import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent implements OnInit {
  
  chart: Chart;

  init() {
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
