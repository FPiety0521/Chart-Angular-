import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { VegaChartComponent } from './vega-chart/vega-chart.component';
import { AmChartChartsComponent } from './am-chart-charts/am-chart-charts.component';
import { HighChartComponent } from './high-chart/high-chart.component';

const routes: Routes = [
{path: 'Chartjs-chart', component: MyBarChartComponent},
{path: 'Vega-chart', component: VegaChartComponent},
{path: 'amChart-chart', component: AmChartChartsComponent},
{path: 'highChart-chart', component: HighChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
