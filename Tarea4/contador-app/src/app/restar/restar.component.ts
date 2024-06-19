import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementar } from '../store/contador.actions';

@Component({
  selector: 'app-restar',
  templateUrl: './restar.component.html',
  styleUrls: ['./restar.component.scss']
})
export class RestarComponent {
  constructor(private store: Store) {}

  restar() {
    this.store.dispatch(decrementar(5));
  }
}

