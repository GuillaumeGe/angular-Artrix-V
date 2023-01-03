import { Component, Input } from '@angular/core';

export enum CellType {}

@Component({
  selector: 'artrix-cell',
  template: ``,
})
export class CellComponent {
  @Input() selected: boolean;

  constructor() {}

  onMouseEnter() {
    console.log("mouse enter");
  }
}

@Component({
  selector: 'artrix-map-cell',
  template: ``,
})
export class CellMapComponent extends CellComponent {}

@Component({
  selector: 'artrix-color-cell',
  template: ``,
})
export class CellColorComponent extends CellComponent {
  @Input() color: string;
}
