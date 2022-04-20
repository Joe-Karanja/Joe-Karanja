import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Crops } from './crops';
import { RecomPopUpComponent } from './recom-pop-up/recom-pop-up.component';
import { RestService } from './rest.service';

@Component({
  selector: 'app-crop-analysis',
  templateUrl: './crop-analysis.component.html',
  styleUrls: ['./crop-analysis.component.scss']
})
export class CropAnalysisComponent implements OnInit {

  url?: string | ArrayBuffer | null | undefined;

  
/* Angular Material Table implementation */
crops:Crops[]=[];
displayedColumns: string[] = ['id', 'cropType','cropAccuracy', 'cropDisease','diseaseAccuracy','recommendation'];
  dataSource = this.crops;

/* Angular Material Table implementation*/

  onSelect(event: any){
    if(event.target.files[0]){
       
      let reader= new FileReader
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event)=>{
        this.url = event.target?.result;
    }
     
    }

  }

  constructor(
    private dialog: NgbModal,
    public rs:RestService) { 
    this.url=undefined;


  }

  openPopup(){
    console.log('ieieiei');
    
   this.dialog.open(RecomPopUpComponent).componentInstance.data = "data from parent"
  }

  ngOnInit(): void {

    this.rs.getCropsAnalysis().subscribe((response)=>{
      this.crops=response;
    })
  }

}
