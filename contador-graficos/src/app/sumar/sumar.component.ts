// src/app/sumar/sumar.component.ts
import { Component } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.scss']
})
export class SumarComponent {
  constructor(private contadorService: ContadorService) {}

  sumar() {
    this.contadorService.incrementar();
  }
}
