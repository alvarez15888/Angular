import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  private contador = new BehaviorSubject<number>(0);
  contador$ = this.contador.asObservable();

  incrementar() {
    this.contador.next(this.contador.value + 5);
  }

  decrementar() {
    this.contador.next(this.contador.value - 5);
  }

  reiniciar() {
    this.contador.next(0);
  }
}
