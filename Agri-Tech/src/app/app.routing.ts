import { AdminLayoutComponent, AuthLayoutComponent } from "./core";

import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
  {
    path: "",
    redirectTo:"dashboard",
    pathMatch: 'full'
  },
  
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule),
          data: {
            breadcrumb: "Dashboard"
          }
      },      
      // Crop - Aanalysis 
      {
        path: "crop-analysis",
        loadChildren: () =>
          import("./crop-analysis/crop-analysis.module").then(m => m.CropAnalysisModule),
          data: {
            breadcrumb: "Crop Analysis"
          }
      },
      //  Crop - Analysis

      // Crop - Aanalysis - Report
      {
        path: "crop-analysis-report",
        loadChildren: () =>
          import("./crop-analysis-report/crop-analysis-report.module").then(m => m.CropAnalysisReportModule),
          data: {
            breadcrumb: "Crop Analysis Report"
          }
      },
      //  Crop - Analysis - Report

      {
        path: "charts",
        loadChildren: () =>
          import("./chartlib/chartlib.module").then(m => m.ChartlibModule),
        data: {
          breadcrumb: "Charts"
        }
      },
      {
        path: "maps",
        loadChildren: () => import("./maps/maps.module").then(m => m.MapModule),
        data: {
          breadcrumb: "Maps"
        }
      },
  
      {
        path: "pages",
        loadChildren: () =>
          import("./pages/pages.module").then(m => m.PagesModule),
          data: {
            brreadcrumb: "Pages"
          }
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "session",
        loadChildren: () =>
          import("./session/session.module").then(m => m.SessionModule)
      }
    ]
  },
  {
    path: "**",
    redirectTo: "session/404"
  }
];
