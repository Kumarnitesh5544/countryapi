import { Component,OnInit } from '@angular/core';
import { CarddataService } from './carddata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'url';
  cardData:any
  constructor(private cardDataservice:CarddataService){}
  ngOnInit(): void {
    this.cardDataservice.getcardData().subscribe((response)=>{
      this.cardData=response
    })

}
}