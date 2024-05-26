// src/app/formulario-dialogo/formulario-dialogo.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-dialogo',
  templateUrl: './formulario-dialogo.component.html',
  styleUrls: ['./formulario-dialogo.component.scss']
})
export class FormularioDialogoComponent {
  form: FormGroup;
  datos: any = null;

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', Validators.required]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormDialog, {
      width: '300px',
      data: { form: this.form }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.datos = result;
      }
    });
  }
}

@Component({
  selector: 'form-dialog',
  template: `
    <h1 mat-dialog-title>Formulario</h1>
    <div mat-dialog-content>
      <form [formGroup]="data.form">
        <mat-form-field>
          <mat-label>Nombre</mat-label>
          <input matInput formControlName="nombre">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Email</mat-label>
          <input matInput formControlName="email">
        </mat-form-field>
        <mat-form-field>
          <mat-label>Dirección</mat-label>
          <input matInput formControlName="direccion">
        </mat-form-field>
      </form>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-button (click)="onSubmit()" [disabled]="!data.form.valid">Enviar</button>
    </div>
  `
})
export class FormDialog {
  constructor(
    public dialogRef: MatDialogRef<FormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.data.form.valid) {
      this.dialogRef.close(this.data.form.value);
    }
  }
}
