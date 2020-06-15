import { Component, OnInit } from '@angular/core';
import { from, Subject , of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import { WeatherItemClass } from '../classes/weatherItem';
import { switchMap , debounceTime , distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  private searchStream= new Subject<string>()
  private weatherData;
  private cityNameFound;
  onSubmit(){
      const newWeatherItem = new WeatherItemClass(this.weatherData.body.name,this.weatherData.body.weather[0].description,this.weatherData.body.main.temp)
      this.weatherService.addingWeatherItem(newWeatherItem)
      console.log(newWeatherItem);
    
  }
  onSearchingForLocation(cityname){
    this.searchStream
    .next(cityname)
  }
  constructor(private weatherService: WeatherService) { }
  ngOnInit() {
    this.searchStream
      .pipe(switchMap((inputName:string) => 
        this.weatherService.searchWeatherData(inputName)
      )
      ,debounceTime(4000)
      ,distinctUntilChanged()
    )
    .subscribe(data=>{
      this.weatherData=data;
      this.cityNameFound=data.body.name
      console.log(this.weatherData);
    })
  }

}
