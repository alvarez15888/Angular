import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TiendaService } from '../tienda.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categorias: string[] = [];

  constructor(private tiendaService: TiendaService, private router: Router) { }

  ngOnInit(): void {
    this.tiendaService.getCategorias().subscribe(data => {
      this.categorias = data;
    });
  }

  verProductos(categoria: string): void {
    this.router.navigate(['/tienda/categoria', categoria]);
  }
}
