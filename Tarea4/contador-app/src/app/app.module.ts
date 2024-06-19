import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { SumarComponent } from './sumar/sumar.component';
import { RestarComponent } from './restar/restar.component';
import { ReiniciarComponent } from './reiniciar/reiniciar.component';
import { contadorReducer } from './store/contador.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    SumarComponent,
    RestarComponent,
    ReiniciarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
