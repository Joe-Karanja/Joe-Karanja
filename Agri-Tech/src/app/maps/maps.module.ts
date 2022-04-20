import { AgmCoreModule } from "@agm/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { MapGoogleComponent } from "./map-google/map-google.component";
import { MapLeafletComponent } from "./map-leaflet/map-leaflet.component";
import { MapRoutes } from "./maps.routing";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,
    FlexLayoutModule,
    AgmCoreModule,
    LeafletModule
  ],
  declarations: [MapGoogleComponent, MapLeafletComponent]
})
export class MapModule {}
