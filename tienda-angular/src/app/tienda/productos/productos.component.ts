import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  categoria: string = '';

  constructor(private route: ActivatedRoute, private tiendaService: TiendaService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.categoria = this.route.snapshot.paramMap.get('category')!;
    this.productos = await this.tiendaService.getProductosPorCategoria(this.categoria);
  }

  verDetalleProducto(id: number): void {
    this.router.navigate(['/producto', id]);
  }
}
