import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ContadorComponent } from './contador/contador.component';
import { FormuserComponent } from './formuser/formuser.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ContadorComponent,
    FormuserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
