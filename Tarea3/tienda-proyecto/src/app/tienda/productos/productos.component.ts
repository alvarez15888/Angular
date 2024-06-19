import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: any[];

  constructor(private tiendaService: TiendaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idCategoria = this.route.snapshot.paramMap.get('id');
    this.tiendaService.getProductosPorCategoria(idCategoria).subscribe((data: any) => {
      this.productos = data;
    });
  }
}


