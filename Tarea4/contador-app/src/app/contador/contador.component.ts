import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
  contador$: Observable<number>;

  constructor(private store: Store<{ contador: number }>) {
    this.contador$ = store.select('contador');
  }
}

