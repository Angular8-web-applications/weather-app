import { Injectable } from '@angular/core';
import { WEATHER_ITEM } from '../weather.data';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  public getWeatherItem(){
    return WEATHER_ITEM;
  }
  constructor() { }
}
