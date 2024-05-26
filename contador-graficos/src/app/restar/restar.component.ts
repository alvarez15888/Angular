// src/app/restar/restar.component.ts
import { Component } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-restar',
  templateUrl: './restar.component.html',
  styleUrls: ['./restar.component.scss']
})
export class RestarComponent {
  constructor(private contadorService: ContadorService) {}

  restar() {
    this.contadorService.decrementar();
  }
}

