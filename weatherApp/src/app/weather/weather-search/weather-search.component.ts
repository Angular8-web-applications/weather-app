import { Component, OnInit } from '@angular/core';
import { from , Subject , of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../service/weather.service';
import { WeatherItemClass } from '../classes/weatherItem';
import { switchMap , debounceTime , distinctUntilChanged} from 'rxjs/operators';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  constructor(private weatherService: WeatherService ,private profileService:ProfileService) { }
  private searchStream= new Subject<string>()
  private weatherData;
  private cityNameFound;
  private iconUrl;

  public saveNew(){
    const cities= this.weatherService.getWeatherItem().map((element)=>{
      return element.cityName
    })
    // console.log(cities);
    this.profileService.saveNewProfile(cities)
  }
  onSubmit(){
    // console.log(formData.value.location);
        const newWeatherItem = new WeatherItemClass(this.weatherData.body.name,this.weatherData.body.weather[0].description,this.weatherData.body.main.temp,this.iconUrl)
        this.weatherService.addingWeatherItem(newWeatherItem)
      console.log(newWeatherItem);
      
  }
  onSearchingForLocation(cityname){
    this.searchStream
    .next(cityname)
  }
  
  ngOnInit() {
    this.searchStream
      .pipe(switchMap((inputName:string) => 
        this.weatherService.searchWeatherData(inputName)
      )
      ,debounceTime(5000)
      ,distinctUntilChanged()
    )
    .subscribe(data=>{
      this.weatherData=data;
      this.cityNameFound=data.body.name
      this.iconUrl= `http://openweathermap.org/img/wn/${data.body.weather[0].icon}@2x.png`;
      console.log(this.weatherData.body);
    })
    
  }

}
