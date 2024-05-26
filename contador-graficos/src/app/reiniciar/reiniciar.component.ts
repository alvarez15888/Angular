// src/app/reiniciar/reiniciar.component.ts
import { Component } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-reiniciar',
  templateUrl: './reiniciar.component.html',
  styleUrls: ['./reiniciar.component.scss']
})
export class ReiniciarComponent {
  constructor(private contadorService: ContadorService) {}

  reiniciar() {
    this.contadorService.reiniciar();
  }
}
