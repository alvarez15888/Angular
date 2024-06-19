import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementar } from '../store/contador.actions';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.scss']
})
export class SumarComponent {
  constructor(private store: Store) {}

  sumar() {
    this.store.dispatch(incrementar(5));
  }
}
