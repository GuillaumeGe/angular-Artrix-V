import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
  <artrix-cell hasBorder="true"></artrix-cell>
  <p>Start editing to see some magic happen :)</p>
  `,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
