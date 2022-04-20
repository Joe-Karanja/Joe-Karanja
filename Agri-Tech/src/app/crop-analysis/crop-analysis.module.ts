import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from "ng2-charts";
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
import { CropAnalysisRoutingModule } from './crop-analysis-routing.module';
import { CropAnalysisComponent } from './crop-analysis.component';
import { routes } from '../crop-analysis/crop-analysis-routing.module';
import { RecomPopUpComponent } from './recom-pop-up/recom-pop-up.component';


// import { CropsComponent } from './crops/crops.component'; 



@NgModule({
  declarations: [CropAnalysisComponent, RecomPopUpComponent],
  imports: [
    CommonModule,
    CropAnalysisRoutingModule,
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
  ]
})
export class CropAnalysisModule { 

}
