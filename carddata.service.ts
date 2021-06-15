import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarddataService {
  Url:string="https://restcountries.eu/rest/v2/all";

  constructor(private httpClient:HttpClient) { }
  getcardData() {
    return this.httpClient.get(this.Url)
  }
}
