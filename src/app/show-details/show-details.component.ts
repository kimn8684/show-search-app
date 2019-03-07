import { Component, OnInit, Input } from '@angular/core';
import { IShowDetails } from '../ishow-details';
import { ShowService } from '../show-service.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  @Input() search: IShowDetails
  
  constructor(private showService: ShowService) { }

  ngOnInit() {
  }

}
