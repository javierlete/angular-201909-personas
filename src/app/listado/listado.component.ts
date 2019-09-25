import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from '../confirmacion.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'email', 'opciones'];
  personas: Persona[];
  // persona: Persona;

  constructor(private personaService: PersonaService, private dialog: MatDialog) { }

  ngOnInit() {
    this.cargarPersonas();

    // CON FUNCIÓN ANÓNIMA
    // this.personaService.getPersonas().subscribe(function (personasRecibidas: Personas[]){
    //   return this.personas = personasRecibidas;
    // });

    // CON FUNCIÓN TRADICIONAL
    // this.personaService.getPersonas().subscribe(this.recibirPersonas() );

    // recibirPersonas(personasRecibidas: Personas[]){
    //   return this.personas = personasRecibidas;
    // }
  }

  private cargarPersonas() {
    this.personaService.getPersonas().subscribe(personasRecibidas => this.personas = personasRecibidas);
  }

  // onEditar(persona: Persona): void {
  //   this.persona = persona;
  // }

  onBorrar(id: number): void {
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      data: {
        titulo: '¿Estás seguro?',
        mensaje: `Vas a borrar el registro cuyo id es ${id}`,
        textoNo: 'No',
        textoSi: 'Sí'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.personaService.deletePersona(id).subscribe(
          () => this.cargarPersonas()
        );
      }
    });
  }
}
