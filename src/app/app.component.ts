import { Component, OnInit } from '@angular/core';
import { RootWeatherData } from 'src/app/models/weather-service.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularweather';
  constructor(private weatherService: WeatherService){}
  weatherData!: RootWeatherData;
  
  
  ngOnInit(){
    this.weatherService.getWeather('Toronto')
      .subscribe({
        next: (response) => {
          this.weatherData = response
        }
      })
  }
}
