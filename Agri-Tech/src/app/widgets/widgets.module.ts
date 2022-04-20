import { AgmCoreModule } from "@agm/core";
import { ChartsModule } from "ng2-charts";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WidgetsComponent } from "./widgets.component";
import { WidgetsRoutes } from "./widgets.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(WidgetsRoutes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    ChartsModule,
    FlexLayoutModule,
    AgmCoreModule
  ],
  declarations: [WidgetsComponent]
})
export class WidgetsModule {}
