import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{gender === "M" ? "uomo" : "donna"}}</h1>',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  gender = 'F';
}
