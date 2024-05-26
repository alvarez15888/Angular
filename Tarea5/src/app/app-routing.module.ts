// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioDialogoComponent } from './formulario-dialogo/formulario-dialogo.component';
import { GraficosComponent } from './graficos/graficos.component';

const routes: Routes = [
  { path: 'formulario', component: FormularioDialogoComponent },
  { path: 'graficos', component: GraficosComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
