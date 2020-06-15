import { Component, OnInit, Input } from '@angular/core';
import {WeatherItemClass} from '../classes/weatherItem'
@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input('item') weatherItem: WeatherItemClass;
  constructor() { 
    // this.weatherItem = new WeatherItemClass('Cairo','sunny',27)

  }

  ngOnInit() {
  }

}
