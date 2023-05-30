import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'

import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { mockWeatherData } from 'src/app/models/mockData';
import { SearchComponent } from '../search/search.component';
import { LocalStorageService } from 'src/app/services/localStorage.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weatherService: WeatherService;
  let localStorageService: LocalStorageService;


  beforeEach(() => {
    const getWatherServiceSpy = jasmine.createSpyObj<WeatherService>(['getWeather']);
    getWatherServiceSpy.getWeather.and.returnValue(of(mockWeatherData))
    localStorageService = new LocalStorageService()

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HomeComponent, SearchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: WeatherService, useValue: getWatherServiceSpy }
      ],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    localStorageService.saveCity('city', 'Malta')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  it('should get weather data on init', () => {
    expect(component.weatherData).toBeFalsy()
    component.ngOnInit()
    expect(component.weatherData).toEqual(mockWeatherData)
  });
  
  it('should update currenCity on calling getCityEventHandler', () => {
    expect(component.currentCity).toBe('Malta')
    component.getCityEventHandler('Dummy City')
    expect(component.currentCity).toBe('London')
  });
});
