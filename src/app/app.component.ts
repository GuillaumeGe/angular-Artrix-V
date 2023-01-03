import { Component, ChangeDetectionStrategy, VERSION } from '@angular/core';
import { Matrix, MatrixType } from './matrix.type';
import { Cell, CellType } from './cell.type';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <hr>
  <ggl-matrix [matrix]="matrix" [hasBorder]="true"></ggl-matrix>
  <hr>
  `,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  colorTest = '#f08500';
  matrix: Matrix = {
    dimensions: {
      width: 4,
      height: 4,
    },
    type: MatrixType.ColorCells,
    cells: [
      { data: '#aaaa1a', type: CellType.Color },
      { data: '#aaaa21', type: CellType.Color },
      { data: '#aaaa31', type: CellType.Color },
      { data: '#aaaa41', type: CellType.Color },
      { data: '#1aaaaa', type: CellType.Color },
      { data: '#21aaaa', type: CellType.Color },
      { data: '#31aaaa', type: CellType.Color },
      { data: '#41aaaa', type: CellType.Color },
      { data: '#aa21aa', type: CellType.Color },
      { data: '#aa21aa', type: CellType.Color },
      { data: '#aa31aa', type: CellType.Color },
      { data: '#aa41aa', type: CellType.Color },
      { data: '#21aa1a', type: CellType.Color },
      { data: '#21aa21', type: CellType.Color },
      { data: '#21aa31', type: CellType.Color },
      { data: '#21aa41', type: CellType.Color },
    ],
    metadata: undefined,
  };
}
