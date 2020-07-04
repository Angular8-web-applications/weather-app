import { Component, OnInit } from '@angular/core';
import { WeatherItemClass } from '../classes/weatherItem';
import { WEATHER_ITEM } from '../weather.data';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  public weatherItems: WeatherItemClass[];
  
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherItems= this.weatherService.getWeatherItem();
    // console.log(this.weatherItems);
  
    
  }

}
