import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CropAnalysisComponent } from './crop-analysis.component';

export const routes: Routes = [
{
  path: "",
  component: CropAnalysisComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropAnalysisRoutingModule { }
