import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from './report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  [x: string]: any;

  constructor(private http:HttpClient) { }
    url:string="http://localhost:3000/AnalysisReport";
    getAnalysisReport(){
    return this.http.get<Report[]>(this.url);
    }
  }

