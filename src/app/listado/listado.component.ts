import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas().subscribe(
      personasRecibidas => this.personas = personasRecibidas);

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
}
