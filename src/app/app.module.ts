import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CellComponent } from './cell.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CellComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
