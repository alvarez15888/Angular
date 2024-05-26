import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiUrl = 'https://fakestoreapi.com';

  constructor() { }

  async getProductos(): Promise<any[]> {
    const response = await fetch(`${this.apiUrl}/products`);
    const data = await response.json();
    return data;
  }

  async getProductosPorCategoria(category: string): Promise<any[]> {
    const response = await fetch(`${this.apiUrl}/products/category/${category}`);
    const data = await response.json();
    return data;
  }

  async getProducto(id: number): Promise<any> {
    const response = await fetch(`${this.apiUrl}/products/${id}`);
    const data = await response.json();
    return data;
  }
}
