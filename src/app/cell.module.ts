import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Cell } from './cell.type';

import { CellComponent } from './cell.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [CellComponent],
  exports: [CellComponent],
})
export class CellModule {}
