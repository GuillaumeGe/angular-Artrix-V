import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  HostListener,
  OnInit,
} from '@angular/core';

import { fromEvent, ReplaySubject } from 'rxjs';
import {
  filter,
  distinct,
  skipUntil,
  map,
  distinctUntilChanged,
  skip,
  scan,
  take,
  tap,
  delay,
  debounceTime,
  mergeMap,
  delayWhen,
  switchMap,
  toArray,
  withLatestFrom,
  mergeAll,
  pairwise,
  takeUntil,
} from 'rxjs/operators';

import { Cell, CellType } from './cell.type';

@Component({
  selector: 'ggl-cell',
  styleUrls: ['./cell.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div 
    class="cell {{hasBorder ? 'bordered' : ''}} {{selected ? 'selected' : ''}}" 
    [style.background-color]="this.renderBkgColor()"
  >{{renderContent()}}
  </div>`,
})
export class CellComponent implements OnInit {
  hover: boolean;
  selected: boolean;
  @Input() cell: Cell;
  @Input() hasBorder: boolean;

  constructor() {
    // this.hover = false;
    // this.selected = false;
  }

  ngOnInit() {}

  renderBkgColor() {
    let result = 'transparent';

    switch (this.cell.type) {
      case CellType.Color:
      case CellType.ColorAndText:
        //handle empty instead of transparent
        result = (this.cell.data as string) ?? 'transparent';
        break;
      case CellType.Image:
        break;
      case CellType.Text:
        break;
    }
    return result;
  }

  renderContent() {
    let result = '';

    switch (this.cell.type) {
      case CellType.Color:
        break;
      case CellType.Image:
        break;
      case CellType.ColorAndText:
      case CellType.Text:
        result = (this.cell.data as string) ?? '';
        break;
    }
    return result;
  }
}
