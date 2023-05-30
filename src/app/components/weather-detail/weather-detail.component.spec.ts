import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs'
import { WeatherDetailComponent } from './weather-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { WeatherService } from 'src/app/services/weather.service';
import { mockWeatherData } from 'src/app/models/mockData';
import { ActivatedRoute } from '@angular/router';



describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;
  let weatherService: WeatherService;
  let route: ActivatedRoute; 

  beforeEach(() => {
    const getWatherServiceSpy = jasmine.createSpyObj<WeatherService>(['getWeather']);
    getWatherServiceSpy.getWeather.and.returnValue(of(mockWeatherData))

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientModule],
      declarations: [WeatherDetailComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: WeatherService, useValue: getWatherServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              
              paramMap: {
                get: () => ({id: 0, city: 'Lagos'})
              }
            }
            
          }
        }
      ],
    });
    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
