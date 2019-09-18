import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  persona: Persona = {
    id: 0,
    nombre: '',
    email: ''
  };

  constructor(private route: ActivatedRoute, private personaService: PersonaService) {
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');

    if (id !== 0) {
      this.personaService.getPersona(id).subscribe(persona => this.persona = persona);
    }
  }

  onGuardar() {
    if (this.persona.id === 0) {
      this.personaService.postPersona(this.persona).subscribe(persona => this.persona = persona);
    } else {
      this.personaService.putPersona(this.persona).subscribe(persona => this.persona = persona);
    }
  }

}
