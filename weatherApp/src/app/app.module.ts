import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherItemComponent } from './weather/weather-item/weather-item.component';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';
import { WeatherService } from '../app/weather/service/weather.service';
import { WeatherSearchComponent } from './weather/weather-search/weather-search.component';
import { SideBarComponent } from './weather/profile/side-bar/side-bar.component';
import { ProfileService } from './weather/service/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WeatherService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
