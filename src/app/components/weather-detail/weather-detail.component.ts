import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Forecastday,
  Hour,
} from 'src/app/models/weather-service.model';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css'],
})
export class WeatherDetailComponent implements OnInit {
  city!: string;
  forecast!: Forecastday;
  hourlyForecast: Array<Hour> = [];

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const paramCity = routeParams.get('city');
    const paramId = Number(routeParams.get('id'));

    if(paramCity && paramId >= 0){
      this.weatherService.getWeather(paramCity).subscribe({
        next: (response) => {
          this.city = paramCity;
          this.forecast = response.forecast.forecastday[paramId];
          this.hourlyForecast = response.forecast.forecastday[paramId].hour;
        },
      });
    }
  }
}
