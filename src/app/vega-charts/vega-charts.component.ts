import { Component, OnInit,  Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
declare var vega: any;
import {View, Parse, parse, Spec} from 'vega';

@Component({
  selector: 'app-vega-charts',
  templateUrl: './vega-charts.component.html',
  styleUrls: ['./vega-charts.component.css']
})
export class VegaChartsComponent implements OnInit {
  @Input() id: any;
  @Output() outgoingData = new EventEmitter<any>();
  @Input() pathToData: string;
  view: View;

  constructor() { }

  public vegaInit(spec: Spec) {
    this.view = new vega.View(vega.parse(spec))
      .renderer('svg')  
      .initialize('#' + this.id)

      .hover()           
      .run();

    this.sendData(this.view);
  }

  public sendData(data: View) {
    this.outgoingData.emit(data);
  }

  ngOnInit() {
    vega.loader().load(this.pathToData)
    .then((data) => { this.vegaInit(JSON.parse(data)); });
  }

}
