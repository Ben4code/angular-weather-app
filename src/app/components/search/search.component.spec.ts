import { first, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { mockCity, mockCitiesData } from 'src/app/models/mockData';
import { WeatherService } from 'src/app/services/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let de: DebugElement;
  let inputElement: HTMLInputElement
  let weatherService: WeatherService

  beforeEach(() => {
    const getWatherServiceCitiesSpy = jasmine.createSpyObj<WeatherService>(['getCity']);
    getWatherServiceCitiesSpy.getCity.and.returnValue(of(mockCity))

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchComponent],
      providers: [
        {provide: WeatherService, useValue: getWatherServiceCitiesSpy},
      ],
    }).compileComponents();
    weatherService = TestBed.inject(WeatherService);

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    inputElement = fixture.nativeElement.querySelector('input');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should search', () => {
    const query = 'Paris'
    component.textInputField = query
    component.selectedCityEvent.pipe(first()).subscribe(selectedPost => {
      expect(selectedPost).toEqual(query)
    }) 
  });

  it('should show dropDown on input focus', () => {
    expect(component.showResultsDorpDown).toBe(false);
    
    inputElement.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(component.showResultsDorpDown).toBe(true)
  });
  
  it('should hide dropDown on click outside input.', () => {
    expect(component.showResultsDorpDown).toBe(false);
    
    inputElement.dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    expect(component.showResultsDorpDown).toBe(true)
    
    component.handleClickedOutside()
    fixture.detectChanges();
    expect(component.showResultsDorpDown).toBe(false);
  });

  it('should register input value on component property.', () => {
    const event = new KeyboardEvent('keyup', {
      bubbles : true, cancelable : true, shiftKey : false
    });
    const input = de.query(By.css('input'));
    const inputElement = input.nativeElement;
    inputElement.value = 'Toro';
    inputElement.dispatchEvent(event);
    fixture.detectChanges();
    expect(component.textInputField).toEqual('Toro')
  });

  it('should call handleCity', () => {
    component.cities = [...mockCitiesData]
    component.handleCity(component.cities[0].name)
    component.selectedCityEvent.pipe(first()).subscribe(city => {
      expect(city).toBe(component.cities[0].name)
    })
  });
});
