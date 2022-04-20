import { BlankComponent } from "./blank/blank.component";
import { EditComponent } from "./edit/edit.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { PricingComponent } from "./pricing/pricing.component";
import { Routes } from "@angular/router";
import { TimelineComponent } from "./timeline/timeline.component";

export const PagesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "blank",
        component: BlankComponent
      },
      {
        path: "invoice",
        component: InvoiceComponent
      },
      {
        path: "timeline",
        component: TimelineComponent
      },
      {
        path: "user",
        component: EditComponent
      },
      {
        path: "pricing",
        component: PricingComponent
      }
    ]
  }
];
