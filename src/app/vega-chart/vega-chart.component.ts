import {Component, OnInit , ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { range, random } from 'lodash';

@Component({
  selector: 'app-vega-chart',
  templateUrl: './vega-chart.component.html',
  styleUrls: ['./vega-chart.component.css']
})
export class VegaChartComponent implements OnInit {
  title = 'app';
  mainChart: any;
  subChart: any;
  charts = [
            {name: 'areaChart', path: '../assets/charts/areaChart.json'},
            {name: 'barChart',  path: '../assets/charts/barChart.json'},
            {name: 'pieChart',  path: '../assets/charts/pieChart.json'}
          
          ];
  constructor() {  }

  ngOnInit() {
  }
  public handleMainChart(chartData: any) {
    this.mainChart = chartData;
    console.log(this.mainChart);
  }

}