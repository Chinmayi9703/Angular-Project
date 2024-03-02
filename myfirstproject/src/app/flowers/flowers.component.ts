import { Component } from '@angular/core';
import { FlowersService } from './flowers.service';

@Component({
  selector: 'flowers',
  template: `
  <h1 style="text-align: center">Flowers</h1>
  <h2>&nbsp; &nbsp; &nbsp;{{ title }}</h2>
  <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Description </h3>
  <ul style = " line-height: 4.5; width:20%; float:left;">
    <li *ngFor = "let flower of flowers">
        {{ flower + " " }}
    </li>
  </ul>
  <ul style = "list-style-type: none; line-height: 1.7;width:40%; float:left;">
  <li *ngFor = "let description of descriptions">
  {{ description }}
  </li>
  </ul>
`,
})
export class FlowersComponent {
    title = "List of Flowers";
    flowers;
    descriptions;

    constructor(service: FlowersService)
    {
      this.flowers = service.getflowers();
      this.descriptions = service.getdescriptions();
    }
}
