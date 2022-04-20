import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable()
export class MenuService {
  constructor(public translate: TranslateService) { }

  getAll() {
    return [
      {
        label: this.translate.instant("DASHBOARD"),
        icon: "dashboard",
        items: [
          { link: "/", label: this.translate.instant("HOME") }
        ]
      }, 

      // Crop Analaysis
      {
        label: this.translate.instant("Crop Analysis"),
        icon: "Crop",
        items: [
          { link: "/crop-analysis", label: this.translate.instant("Crop-Analysis") },
        ]
      },
      // Crop Analaysis

      // Crop Analaysis Reports
      {
        label: this.translate.instant("Crop Analysis Report"),
        icon: "Report",
        items: [
          { link: "/crop-analysis-report", label: this.translate.instant("Crop-Analysis-Report") }
        ]
      },
      // Crop Analaysis Reports

     ];
  }
}
