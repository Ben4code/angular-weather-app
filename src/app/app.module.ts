import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    HomeComponent,
    SearchComponent,
    WeatherChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
