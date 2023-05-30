import { Component, OnInit } from '@angular/core';
import { RootWeatherData } from 'src/app/models/weather-service.model';
import { WeatherService } from 'src/app/services/weather.service';
import { LocalStorageService } from './services/localStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private localStorageService: LocalStorageService
  ){}
  weatherData!: RootWeatherData;
  
  
  ngOnInit(){
    const city = this.localStorageService.getSavedCity('city');
    this.weatherService.getWeather(city)
      .subscribe({
        next: (response) => {
          this.weatherData = response
        }
      })
  }
}
