import { Component, OnInit } from '@angular/core';

import { Forecastday, RootWeatherData } from 'src/app/models/weather-service.model';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  weatherData!: RootWeatherData;
  forecasts: Array<Forecastday> = []
  currentCity = this.localStorageService.getSavedCity('city')
  
  constructor(
    private weatherService: WeatherService,
    private localStorageService: LocalStorageService
  ){}
  
  ngOnInit(){
    this.weatherService.getWeather(this.currentCity)
      .subscribe({
        next: (response) => {
          this.currentCity = response.location.name
          this.weatherData = response
          this.forecasts = [...response.forecast.forecastday]
        }
      })
  }

  getCityEventHandler(cityEvent: string){
    this.weatherService.getWeather(cityEvent)
      .subscribe({
        next: (response) => {
          this.currentCity = response.location.name
          this.weatherData = response
          this.forecasts = [...response.forecast.forecastday]
          this.localStorageService.saveCity('city', this.currentCity)
        }
      })
  }
}
