import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { VegaChartComponent } from './vega-chart/vega-chart.component';
import { VegaChartsComponent } from './vega-charts/vega-charts.component';
import { AmChartChartsComponent } from './am-chart-charts/am-chart-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    VegaChartComponent,
    VegaChartsComponent,
    AmChartChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
