import { Component, OnInit } from '@angular/core';
import {WeatherItemClass} from '../classes/weatherItem'
@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  public weatherItem: WeatherItemClass;
  constructor() { 
    this.weatherItem = new WeatherItemClass('Cairo','sunny',27)
  }

  ngOnInit() {
  }

}
