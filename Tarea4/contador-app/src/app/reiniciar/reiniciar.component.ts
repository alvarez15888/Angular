import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reiniciar } from '../store/contador.actions';

@Component({
  selector: 'app-reiniciar',
  templateUrl: './reiniciar.component.html',
  styleUrls: ['./reiniciar.component.scss']
})
export class ReiniciarComponent {
  constructor(private store: Store) {}

  reiniciar() {
    this.store.dispatch(reiniciar());
  }
}

