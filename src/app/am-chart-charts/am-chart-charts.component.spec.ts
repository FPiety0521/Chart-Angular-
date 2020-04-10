import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmChartChartsComponent } from './am-chart-charts.component';

describe('AmChartChartsComponent', () => {
  let component: AmChartChartsComponent;
  let fixture: ComponentFixture<AmChartChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmChartChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmChartChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
