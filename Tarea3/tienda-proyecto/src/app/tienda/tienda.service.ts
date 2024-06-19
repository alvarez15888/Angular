import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TiendaService {
  private apiUrl = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/categories`);
  }

  getProductosPorCategoria(categoria: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/category/${categoria}`);
  }

  getProducto(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }
}
