import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  signInUser(data) {
  // http call
  console.log("Servoce "+ data)
  return this.http.post("https://pilot-project-apigdp.herokuapp.com/api/user/signin",
  data);
  }
}
