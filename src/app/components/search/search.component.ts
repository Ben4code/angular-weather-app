import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

import { City } from 'src/app/models/weather-service.model';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  showResultsDorpDown: boolean = false;
  textInputField = ''
  subject = new Subject<string>()
  cities: Array<City> = [];
  @Output() selectedCityEvent = new EventEmitter<string>()

  constructor(
    private weatherService: WeatherService,
    private localStorageService: LocalStorageService
  ){}
  
  ngOnInit(): void {
    this.subject.pipe(
      debounceTime(2000),
      distinctUntilChanged())
      .subscribe(value => {
        if(!value){
          return
        }

        this.weatherService.getCity(value)
        .subscribe({
          next: (response) => {
            this.cities = this.cities.concat(response)
          }
        })
      });
  }

  handleKeyUp($event: KeyboardEvent){
    const searchText = ($event.target as HTMLInputElement).value
    this.subject.next(searchText)
    this.textInputField = searchText;
  }
  
  handleCity(city: string){
    this.selectedCityEvent.emit(city)
    this.textInputField = ''
    this.cities = []
    this.localStorageService.saveCity('city', city)
  }

  handleFocus(){
    this.showResultsDorpDown = true
  }
  
  handleClickedOutside(){
    this.showResultsDorpDown = false
  }
}
