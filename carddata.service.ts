import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarddataService {
  link:string="https://restcountries.eu/rest/v2/all";

  constructor(private http:HttpClient) { }
  getData() {
    return this.http.get(this.link)
  }
}
