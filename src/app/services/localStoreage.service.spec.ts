import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LocalStorageService } from './localStorage.service';


describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;
  const city = 'Lagos';

  beforeEach(() => {
    localStorageService = new LocalStorageService()

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    localStorageService = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
  });

  it(`should get city from localStorage service'`, () => {
    expect(localStorageService.getSavedCity('')).toEqual('Toronto');
    localStorageService.saveCity('city', city)
    expect(localStorageService.getSavedCity('city')).toEqual(city);
  });
});
