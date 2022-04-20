import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropAnalysisReportComponent } from './crop-analysis-report.component';

export const routes: Routes = [
  {
    path:'',
    component:CropAnalysisReportComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropAnalysisReportRoutingModule { }
