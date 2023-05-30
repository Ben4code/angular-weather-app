import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChartComponent } from './weather-chart.component';
import { mockHourlyWeather } from 'src/app/models/mockData';

describe('WeatherChartComponent', () => {
  let component: WeatherChartComponent;
  let fixture: ComponentFixture<WeatherChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherChartComponent]
    });
    fixture = TestBed.createComponent(WeatherChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return chart attributes', () => {
    component.hourlyWeather = [ {...mockHourlyWeather}]
    expect(component.getHourlyTimeLabel()).toEqual(['12:00pm']) 
    expect(component.getHourlyTempValues()).toEqual([100]) 
    expect(component.getHourlyWindValues()).toEqual([100]) 
    expect(component.getHourlyHumidityValues()).toEqual([100]) 
  });
});
