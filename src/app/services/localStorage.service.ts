import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  getSavedCity(key: string){
    const save = localStorage.getItem(key)
    if(!save){
      return 'Toronto'
    }
    return save
  }

  saveCity(key: string, value: string){
    localStorage.setItem(key, value)
  }
}