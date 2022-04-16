import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Properties } from '../properties.';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/Properties';

  getProperties() {
    // We declare an array of class Properties
    return this.http.get<Properties[]>(this.url);
  }
}
