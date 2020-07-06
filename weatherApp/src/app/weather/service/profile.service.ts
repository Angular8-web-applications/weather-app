import { Injectable } from '@angular/core';
import { Profile } from '../classes/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles:Profile[]=[
    new Profile('Defult profile',['Qena','Paris'])
  ]

  public saveNewProfile( cities :string[]){
    const profileName ='Profile ' + this.profiles.length
    const newProfile = new Profile(profileName,cities)
    this.profiles.push(newProfile)
  }
  public getProfile(){
    return this.profiles
  }
  public deleteProfile(profile:Profile){
    this.profiles.splice(this.profiles.indexOf(profile),1)
  }
  constructor() { }
}
