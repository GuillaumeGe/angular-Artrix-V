export enum CellType {
  Color = 0,
  Image = 1,
  Text = 2,
  ColorAndText = 3,
}

export interface Cell
  extends Readonly<{
    type: CellType;
    data: any;
    metadata?: any;
  }> {}
