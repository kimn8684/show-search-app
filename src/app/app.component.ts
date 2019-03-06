import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { ShowService } from './show-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'show-search-app';
  currentProgram: IShowDetails;

  constructor(private tvmazeService: ShowService) { }


  doSearch(searchValue){
    const userInput = searchValue.trim();
    this.tvmazeService.getCurrentShow(userInput).subscribe(data => this.currentProgram = data);

  }


}