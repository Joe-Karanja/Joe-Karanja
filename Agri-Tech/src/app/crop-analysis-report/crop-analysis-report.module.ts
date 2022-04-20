import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatInputModule } from '@angular/material/input';
import {  MatFormFieldModule, } from '@angular/material/form-field';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu"; 
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { routes } from '../crop-analysis/crop-analysis-routing.module'; 
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

import { CropAnalysisReportRoutingModule } from './crop-analysis-report-routing.module';
import { CropAnalysisReportComponent } from './crop-analysis-report.component';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';


@NgModule({
  declarations: [CropAnalysisReportComponent],
  imports: [
    CommonModule,
    CropAnalysisReportRoutingModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatMenuModule,
    ChartsModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MatFormFieldModule, 
    MatInputModule,
    MatSortModule,
    MatPaginatorModule
  ]
})
export class CropAnalysisReportModule { }
