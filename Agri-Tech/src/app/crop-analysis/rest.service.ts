import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crops } from './crops';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }
  url:string="http://localhost:3000/CropsAnalysis";
  getCropsAnalysis(){
    return this.http.get<Crops[]>(this.url);
  }
}
