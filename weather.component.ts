import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input ('img') image=""
  @Input ('name') name=""
  @Input('region') region=""
  @Input ('population') population=""
  @Input ('capital') capital=""
 

  constructor() { }

  ngOnInit(): void {
  }

}
