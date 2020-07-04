import { Injectable } from '@angular/core';
import { WEATHER_ITEM } from '../weather.data';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { WeatherItemClass } from '../classes/weatherItem';
import { Observable } from 'rxjs';
// import 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient){}
  public getWeatherItem(){
    return WEATHER_ITEM;
  }
  public addingWeatherItem(weatherItem: WeatherItemClass){
    WEATHER_ITEM.push(weatherItem)
  }
  public searchWeatherData( cityName: string) : Observable<any>{
    const appIUrl='https://community-open-weather-map.p.rapidapi.com/weather'
    const params = new HttpParams().set("q", cityName).set('unit','%22imperial%22')
    const headers = new HttpHeaders().set('x-rapidapi-key','eadb1eff81mshbd014e5fc771ab1p1e2d52jsn44ba94df312f')
    return this.http.get(appIUrl, { params , observe: 'response', headers});
  }

  public clearWeatherItem(){
    WEATHER_ITEM.slice(0)
    console.log(WEATHER_ITEM.slice(0));
    
  }
}
