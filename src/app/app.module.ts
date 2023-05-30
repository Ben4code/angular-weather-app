import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherChartComponent } from './components/weather-chart/weather-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailComponent,
    HomeComponent,
    SearchComponent,
    WeatherChartComponent,
    NavbarComponent,
    ClickedOutsideDirective,
    PageNotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
