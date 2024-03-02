import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  // template: `
  // <h2>title</h2>
  // <ul>
  //   <li *ngFor="let author of authors">
  //       {{ author }}
  //   </li>
  // </ul> 
  // `
})
export class AuthorsComponent {
  title = "3 Authors";
  authors;

  constructor(service: AuthorsService)
  {
    this.authors = service.getAuthors();
  }
}
