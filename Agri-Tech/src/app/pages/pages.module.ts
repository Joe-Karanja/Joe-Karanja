import { BlankComponent } from "./blank/blank.component";
import { CommonModule } from "@angular/common";
import { EditComponent } from "./edit/edit.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { InvoiceComponent } from "./invoice/invoice.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PagesRoutes } from "./pages.routing";
import { PricingComponent } from "./pricing/pricing.component";
import { RouterModule } from "@angular/router";
import { TimelineComponent } from "./timeline/timeline.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    BlankComponent,
    InvoiceComponent,
    TimelineComponent,
    EditComponent,
    PricingComponent
  ]
})
export class PagesModule {}
