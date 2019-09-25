import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

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

  personaForm = this.fb.group({
    id: [0],
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private location: Location,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    const id: number = +this.route.snapshot.paramMap.get('id');

    if (id !== 0) {
      this.personaService.getPersona(id).subscribe(persona => {
        this.persona = persona;
        this.personaForm.setValue(this.persona);
      });
    }
  }

  onGuardar() {
    if (!this.personaForm.valid) {
      return;
    }

    this.persona = this.personaForm.value;
    console.log(this.persona);

    if (this.persona.id === 0) {
      this.personaService.postPersona(this.persona).subscribe(persona => {
        this.persona = persona;
        this.location.back();
      });
    } else {
      this.personaService.putPersona(this.persona).subscribe(persona => {
        this.persona = persona;
        this.location.back();
      });
    }
  }

  onCancelar() {
    this.location.back();
  }

  // TODO Continuar aquí
  // const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //   width: '250px',
  //   data: {name: this.name, animal: this.animal}
  // });

  // dialogRef.afterClosed().subscribe(result => {
  //   console.log('The dialog was closed');
  //   this.animal = result;
  // });
}
