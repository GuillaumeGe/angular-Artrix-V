import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CellModule } from './cell.module';
import { MatrixModule } from './matrix.module';
import { CellComponent } from './cell.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatrixModule, CellModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
