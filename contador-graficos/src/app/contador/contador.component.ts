// src/app/contador/contador.component.ts
import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
    contador: number;

  constructor(private contadorService: ContadorService) {
    this.contadorService.contador$.subscribe(value => {
      this.contador = value;
    });
  }

  ngOnInit(): void {}
}
