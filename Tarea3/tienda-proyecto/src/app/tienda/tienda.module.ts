import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { TiendaRoutingModule } from './tienda-routing.module';

@NgModule({
  declarations: [
    CategoriasComponent,
    ProductosComponent,
    ProductoDetalleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TiendaRoutingModule
  ]
})
export class TiendaModule { }
