import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {
  onSubmit(f: FormGroup){
    console.log(f);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
