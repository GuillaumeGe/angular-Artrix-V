import { Cell } from './cell.type';

export interface MatrixDimensions
  extends Readonly<{
    width: number;
    height: number;
  }> {}

export enum MatrixType {
  ColorCells = 0,
  ImageCells = 1,
  TextCells = 2,
  MixedCells = 3,
}

export interface Matrix
  extends Readonly<{
    dimensions: MatrixDimensions;
    cells: Cell[];
    type: MatrixType;
    metadata?: any;
  }> {}
