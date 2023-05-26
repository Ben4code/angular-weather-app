import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WeatherDetailComponent } from './components/weather-detail/weather-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detail', component: WeatherDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
