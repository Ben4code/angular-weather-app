import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { City, RootWeatherData } from '../models/weather-service.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherData: RootWeatherData | undefined;
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

  getCity(city: string): Observable<City>{
    return this.http.get<City>(environment.WEATHER_API_CITY_SEARCH_URL, {
      headers: new HttpHeaders()
        .set(environment.X_RAPIDAPI_HOST_LABEL, environment.X_RAPIDAPI_HOST_VALUE)
        .set(environment.X_RAPIDAPI_KEY_LABEL, environment.X_RAPIDAPI_KEY_VALUE),
      params: new HttpParams()
        .set('q', city)
    })
  }

  getSavedCity(key: string){
    const save = localStorage.getItem(key)
    if(!save){
      return 'Toronto'
    }
    return save
  }

  saveCity(key: string, value: string){
    localStorage.setItem(key, value)
  }
}
