import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

import { mockWeatherData } from './models/mockData';
import { WeatherService } from './services/weather.service';
import { LocalStorageService } from './services/localStorage.service';
import { NavbarComponent } from './components/navbar/navbar.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let localStorageService: LocalStorageService;
  
  beforeEach(() => {
    const getWatherServiceSpy = jasmine.createSpyObj<WeatherService>(['getWeather']);
    getWatherServiceSpy.getWeather.and.returnValue(of(mockWeatherData))
    localStorageService = new LocalStorageService()

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AppComponent, NavbarComponent],
      providers: [
        {provide: WeatherService, useValue: getWatherServiceSpy},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    localStorageService.saveCity('city', 'Malta')
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should get city from localStorage service'`, () => {
    expect(component.weatherData).toBeFalsy()
    component.ngOnInit()
    expect(component.weatherData.location.name).toBe('London')
  });
  
  it(`should get weather data'`, () => {
    fixture.autoDetectChanges()
    expect(component.weatherData).toEqual(mockWeatherData);
    expect(component.weatherData.location.name).toEqual(mockWeatherData.location.name)
    expect(component.weatherData.location.country).toEqual(mockWeatherData.location.country)
    expect(component.weatherData.location.region).toEqual(mockWeatherData.location.region)
  });
});
