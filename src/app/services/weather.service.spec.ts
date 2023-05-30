import { defer } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WeatherService } from './weather.service';
import { mockCity, mockWeatherData } from '../models/mockData';



describe('WeatherService', () => {
  let weatherService: WeatherService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;


  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    weatherService = new WeatherService(httpClientSpy);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
  });

  it('should be created', () => {
    expect(weatherService).toBeTruthy();
  });

  it('should get city fake-http data', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncData(mockCity));
    weatherService.getCity('dummy city').subscribe({
      next: response => {
        expect(response).toEqual(mockCity)
        done()
      },
      error: done.fail
    })
  });
  
  it('should get weather fake-http data', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(asyncData(mockWeatherData));
    weatherService.getWeather('Dummy city').subscribe({
      next: response => {
        expect(response).toEqual(mockWeatherData)
        done()
      },
      error: done.fail
    })
  });
});

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

interface DoneFn extends Function {
  (): void;
  fail: (message?: Error | string) => void;
}
