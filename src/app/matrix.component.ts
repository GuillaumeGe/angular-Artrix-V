import {
  Component,
  Input,
  Output,
  ChangeDetectionStrategy,
  EventEmitter,
  HostListener,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { fromEvent, Observable, ReplaySubject } from 'rxjs';
import {
  filter,
  distinct,
  skipUntil,
  map,
  distinctUntilChanged,
  tap,
  delay,
  debounceTime,
  takeUntil,
} from 'rxjs/operators';
import { Matrix } from './matrix.type';
import { Cell } from './cell.type';

@Component({
  selector: 'ggl-matrix',
  styleUrls: ['./matrix.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <ng-container 
    *ngIf="matrix.cells.length === matrix.dimensions.width * matrix.dimensions.height"
  >
    <div class="matrix {{hasBorder ? 'bordered' : ''}}" >
      <div *ngFor="let cell of matrix.cells; index as i;">
        <ggl-cell 
        id="{{i}}" 
        [cell]="cell" 
        [hasBorder]="hasBorder" 
        (cellEmmitter)="this.onCellDidChange($event)">
        </ggl-cell>
      </div>
    </div>
  </ng-container>`,
})
export class MatrixComponent implements OnInit, OnDestroy {
  @Input() matrix: Matrix;
  @Input() hasBorder: boolean;
  @Input() showGrid: boolean;
  @Output() dragOnCells = new EventEmitter<Cell[]>();

  isGridDragging: boolean;
  isGridClicked: boolean;
  currentCell?: Cell; //TODO: maybe change to stream
  previousCell?: Cell;

  mouseMove$: Observable<any>;
  mouseLeave$: Observable<any>;
  mouseDown$ = fromEvent(document.querySelectorAll('.cell'), 'mousedown').pipe(
    debounceTime(100)
  );
  mouseUp$ = fromEvent(document.querySelectorAll('.cell'), 'mouseup').pipe(
    debounceTime(100)
  );

  constructor() {}

  ngOnInit() {
    this.mouseMove$ = fromEvent(
      document.querySelectorAll('.cell'),
      'mousemove'
    ).pipe(debounceTime(50), takeUntil(this.mouseLeave$));

    this.mouseLeave$ = fromEvent(
      document.querySelectorAll('.cell'),
      'mouseleave'
    ).pipe(debounceTime(50));
  }

  ngOnDestroy() {}

  onCellDidChange(cell: Cell) {
    if (cell !== this.currentCell) {
      this.previousCell = this.currentCell;
      this.currentCell = cell;

      console.log(cell);
    }
  }
}

/*
  let isGridDragging = false;
	let isGridClicked = false;

	drawCanvas.addEventListener("mousedown", function(event) {
		if(event) {
			gridDrawerComponent.clearHighlightedCells();

			let currentGridCell = gridPositionFromEventPosition(event.x, event.y);
			previousGridCell = currentGridCell;

			if (!isMobileBrowser) {
				isGridDragging = false;
				isGridClicked = true;
				
				if (userMode == UserModeType.SELECTION) {
					gridDrawerComponent.clearSelectedCells();
				}
			}
			
			if (userModeTool == UserModeToolType.BUCKET) {
				//find closest pixels having same color
			} else {
				if (userModeTool == UserModeToolType.MIRROR) {
					//find mirrored cell		
				} else {
					updateCells([currentGridCell], getEditColor());
				}
			}
		}
	});

	drawCanvas.addEventListener("mousemove", function(event) {
		if(event) {
			gridDrawerComponent.clearHighlightedCells();
			let currentGridCell = gridPositionFromEventPosition(event.x, event.y);

			// Trigger drag
			if (!isGridDragging && isGridClicked) {
				isGridDragging = true;
			}

			if (isGridClicked) {
				// if current cell is different than previous one
				if (!cellPositionCompare(previousGridCell, currentGridCell)) {
					if (userModeTool == UserModeToolType.ONEBYONE) {
						updateCells([currentGridCell], getEditColor());

						if (isGridDragging) {
							previousGridCell = currentGridCell;
						}
					} else if (userModeTool == UserModeToolType.RECT) {
						let cellsInRect = cellsInRectShape(previousGridCell, currentGridCell);
						gridDrawerComponent.clearSelectedCells();
						updateCells(cellsInRect, getEditColor());
					} else if (userModeTool == UserModeToolType.CIRCLE) {
						let cellsInCircle = cellsInCircleShape(previousGridCell, currentGridCell);
						gridDrawerComponent.clearSelectedCells();
						updateCells(cellsInCircle, getEditColor());
					}
				}
			}

			gridDrawerComponent.highlightCells([currentGridCell]);
		}
	});

	drawCanvas.addEventListener("mouseup", function(event) {
		if (event) {
			endDrag();
		}
	});

	drawCanvas.addEventListener("mouseleave", function(event) {
		if (event) {
			endDrag();
			gridDrawerComponent.clearHighlightedCells();
		}
	});

	function endDrag() {
		if (!isMobileBrowser) {
			isGridDragging = false;
			isGridClicked = false;

			if (cellsToUpdate.length > 0) {
				//send
		    	//updateCells(cellsToUpdate);
			}
		   
		    cellsToUpdate = [];
		    previousGridCell = undefined;
		}
	}
*/

/*
let shapeIsDrawed = false;

	drawCanvas.addEventListener("touchstart", function(event) {
		if (event) {
			let currentGridCell = gridPositionFromEventPosition(event.pageX, event.pageY);

			if (selectionIsDrawed) {
				gridDrawerComponent.clearSelectedCells();
				shapeIsDrawed = false;
				previousGridCell = undefined;
			}

			if (previousGridCell == undefined) {
				previousGridCell = currentGridCell;
			}
			
			if (userMode == UserModeType.SELECTION && !shapeIsDrawed) {
				//if cell is different
				if (!cellPositionCompare(previousGridCell, currentGridCell)) {
					if (userModeTool == UserModeToolType.ONEBYONE) {
						updateCells([currentGridCell], getEditColor());
						shapeIsDrawed = true;
					} else if (userModeTool == UserModeToolType.RECT) {
						let cellsInRect = cellsInRectShape(previousGridCell, currentGridCell);
						updateCells(cellsInRect, getEditColor());
						shapeIsDrawed = true;
					} else if (userModeTool == UserModeToolType.CIRCLE) {
						let cellsInCircle = cellsInCircleShape(previousGridCell, currentGridCell);
						updateCells(cellsInCircle, getEditColor());
						shapeIsDrawed = true;
					}
				}

				updateCells([currentGridCell]);
			}

			previousGridCell = currentGridCell;
		}
	});
*/
