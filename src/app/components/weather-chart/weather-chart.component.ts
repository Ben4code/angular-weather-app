import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js/'

Chart.register(...registerables)

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})
export class WeatherChartComponent implements OnInit{
  constructor(){}
  
  ngOnInit(): void {
    this.renderChart()    
  }

  renderChart(){
    const chart = new Chart("piechart", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
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
}
