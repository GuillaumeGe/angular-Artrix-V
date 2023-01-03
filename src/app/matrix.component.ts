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
import { Matrix } from './matrix.type';

@Component({
  selector: 'ggl-matrix',
  styleUrls: ['./matrix.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-container 
    *ngIf="matrix.cells.length === matrix.dimensions.width * matrix.dimensions.height"
    class="matrix {{hasBorder ? 'bordered' : ''}}" 
  >
    <div *ngFor="let cell of matrix.cells" style="display: flex;">
      <ggl-cell 
      id="" 
      [cell]="cell" 
      [hasBorder]="hasBorder">
      </ggl-cell>
    </div>
  </ng-container>`,
})
export class MatrixComponent {
  @Input() matrix: Matrix;
  @Input() hasBorder: boolean;
  @Input() showGrid: boolean;
  @Output() pressDownHandler = new EventEmitter<any>();
  mouseEnter$ = fromEvent(
    document.querySelectorAll('.cell'),
    'mouseenter'
  ).pipe(debounceTime(100));
  mouseLeave$ = fromEvent(
    document.querySelectorAll('.cell'),
    'mouseleave'
  ).pipe(debounceTime(100));
  mouseDown$ = fromEvent(document.querySelectorAll('.cell'), 'mousedown').pipe(
    debounceTime(100)
  );
  mouseUp$ = fromEvent(document.querySelectorAll('.cell'), 'mouseup').pipe(
    debounceTime(100)
  );

  constructor() {}
}
