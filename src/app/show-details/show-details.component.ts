import { Component, OnInit, Input } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { ShowService } from '../show-service.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  @Input() show: IShowDetails
  
  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

}
