import { Component, OnInit } from '@angular/core';
import { Profile } from '../../classes/profile';
import { ProfileService } from '../../service/profile.service';
import { WeatherService } from '../../service/weather.service';
import { retry } from 'rxjs/operators';
import { WeatherItemClass } from '../../classes/weatherItem';
import { WEATHER_ITEM } from '../../weather.data';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public proflies:Profile[]
  constructor(private profileService:ProfileService,private weatherService:WeatherService) { }

  public onLoadProfile(profile :Profile){
    this.weatherService.clearWeatherItem()
    /* for (let x=0;x=profile.cities.length;x++){
      this.weatherService.searchWeatherData(profile.cities[x]).pipe(retry()).subscribe(data=>{
        const newWeatherItem = new WeatherItemClass(data.body.name,data.body.weather[0].description,data.body.main.temp)
        this.weatherService.addingWeatherItem(newWeatherItem)
      })
    } */
    profile.cities.map(city=>{
      this.weatherService.searchWeatherData(city).pipe(retry()).subscribe(data=>{
        const newWeatherItem = new WeatherItemClass(data.body.name,data.body.weather[0].description,data.body.main.temp)
        this.weatherService.addingWeatherItem(newWeatherItem)
      })
    })
    
  }
  public deleteProfile(event: Event, profile :Profile){
    event.stopPropagation()
    this.profileService.deleteProfile(profile)
  }
  ngOnInit() {
    this.proflies= this.profileService.getProfile()
    console.log(this.proflies);
    
  }

}
