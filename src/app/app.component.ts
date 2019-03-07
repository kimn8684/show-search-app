import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { ShowService } from './show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'show-search-app';
  currentProgram: IShowDetails;

  constructor(private showService: ShowService) { }


  doSearch(searchValue) {
    const userInput = searchValue.trim();
    this.showService.getCurrentShow(userInput).subscribe(data => this.currentProgram = data);
  }
}
