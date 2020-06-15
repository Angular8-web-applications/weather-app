import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import { WeatherItemClass } from '../classes/weatherItem';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  onSubmit(formData: FormGroup){
    // console.log(formData.value.location);
    this.weatherService.searchWeatherData(formData.value.location).subscribe(
      responseData => {
        const newWeatherItem = new WeatherItemClass(responseData.body.name,responseData.body.weather[0].description,responseData.body.main.temp)
        this.weatherService.addingWeatherItem(newWeatherItem)
      console.log(newWeatherItem);
      }
    )
  }
  constructor(private weatherService: WeatherService) { }
    public x;
  ngOnInit() {
    
    
    
    
  }

}
