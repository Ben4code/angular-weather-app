import { Component, OnInit, Input } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js/'
import { Hour } from 'src/app/models/weather-service.model';

Chart.register(...registerables)

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})
export class WeatherChartComponent implements OnInit{
  @Input() hourlyWeather: Array<Hour> = [];
  constructor(){}
  
  ngOnInit(): void {
    this.renderChart()    
  }

  renderChart(){
    const chart = new Chart("piechart", {
      type: 'line',
      data: {
        labels: this.getHourlyTimeLabel(),
        datasets: [
          {
            label: 'Temperature(°C)',
            data: this.getHourlyTempValues(),
            borderWidth: 1
          },
          {
            label: 'Wind(Kmph)',
            data: this.getHourlyWindValues(),
            borderWidth: 1
          },
          {
            label: 'Humidity',
            data: this.getHourlyHumidityValues(),
            borderWidth: 1
          },
      ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    return chart
  }

  getHourlyTimeLabel(){
    const houlyLabels = this.hourlyWeather.map(weather => weather.time.split(' ')[1])
    return houlyLabels;
  }
  getHourlyTempValues(){
    const houlyTempValues = this.hourlyWeather.map(weather => weather.temp_c)
    return houlyTempValues;
  }
  getHourlyWindValues(){
    const houlyWindValues = this.hourlyWeather.map(weather => weather.wind_kph)
    return houlyWindValues;
  }
  getHourlyHumidityValues(){
    const houlyHumidityValues = this.hourlyWeather.map(weather => weather.humidity)
    return houlyHumidityValues;
  }
}
