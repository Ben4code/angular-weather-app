import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { RootWeatherData } from '../models/weather-service.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<RootWeatherData>{
    return this.http.get<RootWeatherData>(environment.WEATHER_API_BASE_URL, {
      headers: new HttpHeaders()
        .set(environment.X_RAPIDAPI_HOST_LABEL, environment.X_RAPIDAPI_HOST_VALUE)
        .set(environment.X_RAPIDAPI_KEY_LABEL, environment.X_RAPIDAPI_KEY_VALUE),
      params: new HttpParams()
        .set('q', city)
        .set('days', 3),
    })
  }
  getCity(city: string): Observable<RootWeatherData>{
    return this.http.get<RootWeatherData>(environment.WEATHER_API_BASE_URL, {
      headers: new HttpHeaders()
        .set(environment.X_RAPIDAPI_HOST_LABEL, environment.X_RAPIDAPI_HOST_VALUE)
        .set(environment.X_RAPIDAPI_KEY_LABEL, environment.X_RAPIDAPI_KEY_VALUE),
      params: new HttpParams()
        .set('q', city)
        .set('days', 3),
    })
  }
}
