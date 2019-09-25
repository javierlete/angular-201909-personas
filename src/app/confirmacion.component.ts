import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-confirmacion',
    template: `
    <h2 mat-dialog-title>{{data.titulo}}</h2>
    <mat-dialog-content class="mat-typography">{{data.mensaje}}</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button [mat-dialog-close]="false" cdkFocusInitial>{{data.textoNo}}</button>
      <button mat-button [mat-dialog-close]="true">{{data.textoSi}}</button>
    </mat-dialog-actions>`
})
export class ConfirmacionComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmacionComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DatosDialogo) {}
}

export interface DatosDialogo {
    titulo: string;
    mensaje: string;
    textoNo: string;
    textoSi: string;
}
