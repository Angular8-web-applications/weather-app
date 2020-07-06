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
    
  }
  public convertFahrenheitToCelsius(value) :Number {
    // var input=parseFloat(value)
    return Math.round((value - 32) * 5.0 / 9.0)
}
  ngOnInit() {
    // console.log(this.convertFahrenheitToCelsius(this.weatherItem.temprature));
    // this.convertFahrenheitToCelsius(this.weatherItem.temprature)
  }

}
