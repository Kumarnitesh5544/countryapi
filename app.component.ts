import { Component,OnInit } from '@angular/core';
import { CarddataService } from './carddata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'url';
  value1:any
  constructor(private card1:CarddataService){}
  ngOnInit(): void {
    this.card1.getData().subscribe((res)=>{
      this.value1=res
    })

}
}
