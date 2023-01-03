import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CellModule } from './cell.module';
import { MatrixComponent } from './matrix.component';
// import { Matrix, MatrixType, MatrixDimensions } from './matrix.type';

@NgModule({
  imports: [BrowserModule, CellModule],
  declarations: [MatrixComponent],
  exports: [MatrixComponent],
})
export class MatrixModule {}
