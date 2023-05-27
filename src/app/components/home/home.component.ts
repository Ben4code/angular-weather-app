import { Component, OnInit } from '@angular/core';
import { RootWeatherData } from 'src/app/models/weather-service.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  constructor(private weatherService: WeatherService){}
  weatherData?: RootWeatherData;
  
  ngOnInit(){
    this.weatherService.getWeather('Toronto')
      .subscribe({
        next: (response) => {
          console.log(response)
          this.weatherData = response
        }
      })
  }
}
