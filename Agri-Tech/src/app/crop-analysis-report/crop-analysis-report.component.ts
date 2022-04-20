import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Report } from './report';
import { ReportService } from './report.service';

@Component({
  selector: 'app-crop-analysis-report',
  templateUrl: './crop-analysis-report.component.html',
  styleUrls: ['./crop-analysis-report.component.scss']
})
export class CropAnalysisReportComponent implements OnInit,AfterViewInit { 
  url?: string | ArrayBuffer | null | undefined;

  reports:Report[]=[];  

  displayedColumns: string[] = ['analysis_REF_No', 'crop', 'status', 'disease_Name','probability','date_Created'];
  dataSource = new MatTableDataSource(this.reports)



  constructor(public rs:ReportService) { 
    this.url=undefined;
  }
//sorting
  // @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    // this.reports.sort = this.sort;


  }
  // Pagination

  @ViewChild(MatPaginator, {static: true}) set matPaginator(paginator: MatPaginator) 
  { this.dataSource.paginator = paginator; }


  


  ngOnInit(): void {
    

    this.loadData();
  }
  
  loadData(){
    this.rs.getAnalysisReport().subscribe((response)=>{
      this.reports=response;
    })
  }
  


  public doFilter = (value: string) => {
    //console.log(this.reports)
    value = value.toLocaleLowerCase()
    const fil = this.reports.filter(item=>{
     return item.crop.toLowerCase().indexOf(value) !== -1 || !value;
    });
    this.reports = fil
    
  }
  
    }
    
  
