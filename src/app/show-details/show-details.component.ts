import { Component, OnInit, Input } from '@angular/core';
import { IShowDetails } from '../ishow-details';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  @Input() show: IShowDetails
  
  constructor() { }

  ngOnInit() {
  }

}
