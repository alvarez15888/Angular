import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categorias: string[] = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  verProductos(categoria: string): void {
    this.router.navigate(['/categorias', categoria]);
  }
}
