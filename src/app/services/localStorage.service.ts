import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { City, RootWeatherData } from '../models/weather-service.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
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