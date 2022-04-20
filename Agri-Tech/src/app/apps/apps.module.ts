import { CalendarModule, DateAdapter } from "angular-calendar";

import { AppsRoutes } from "./apps.routing";
import { CalendarDialogComponent } from "./fullcalendar/fullcalendar.component";
import { ChartsModule } from "ng2-charts";
import { ChatComponent } from "./chat/chat.component";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FullcalendarComponent } from "./fullcalendar/fullcalendar.component";
import { MailComponent } from "./mail/mail.component";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MediaComponent } from "./media/media.component";
import { NgModule } from "@angular/core";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { RouterModule } from "@angular/router";
import { SocialComponent } from "./social/social.component";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AppsRoutes),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatTabsModule,
    MatDialogModule,
    MatExpansionModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FlexLayoutModule,
    ChartsModule,
    PerfectScrollbarModule
  ],
  declarations: [
    FullcalendarComponent,
    MailComponent,
    MediaComponent,
    ChatComponent,
    SocialComponent,
    CalendarDialogComponent
  ],
  entryComponents: [CalendarDialogComponent]
})
export class AppsModule {}
