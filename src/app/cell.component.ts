import { Component, Input } from '@angular/core';

export enum CellType {}

@Component({
  selector: 'artrix-cell',
  styleUrls: ['./cell.component.css'],
  template: `<div class="cell {{hasBorder ? "bordered" : ""}} {{selected ? "selected" : ""}}">
  </div>`,
})
export class CellComponent {
  selected: boolean;
  @Input() hasBorder: boolean;

  constructor() {}

  onMouseEnter() {
    console.log('mouse enter');
    this.selected = true;
  }

  onMouseLeave() {
    console.log('mouse leave');
    this.selected = false;
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
