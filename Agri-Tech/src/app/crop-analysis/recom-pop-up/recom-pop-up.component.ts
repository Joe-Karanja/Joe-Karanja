import { Component, Input, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Crops } from './crops';

@Component({
  selector: 'app-recom-pop-up',
  templateUrl: './recom-pop-up.component.html',
  styleUrls: ['./recom-pop-up.component.scss']
})
export class RecomPopUpComponent implements OnInit {
  @Input() data: any;

  /* Angular Material Table implementation */
crops:Crops[]=[];
displayedColumns: string[] = ['cropType','cropDisease','recommendation'];
  dataSource = this.crops;
  url: any;

/* Angular Material Table implementation*/

  constructor( public rs:RestService) {
    this.url=undefined;
   }

  ngOnInit(): void {

    this.rs.getCropsAnalysis().subscribe((response)=>{
      this.crops=response;
    })
  }

}
