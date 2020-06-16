import { Injectable } from '@angular/core';
import { WEATHER_ITEM } from '../weather.data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public getWeatherItem(){
    return WEATHER_ITEM;
  }
  constructor() { }
}
