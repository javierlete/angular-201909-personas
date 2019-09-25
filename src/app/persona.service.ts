import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Persona } from './persona';

import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'http://localhost:3000/personas/';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url).pipe(
      catchError(this.gestionarError<Persona[]>('Obtener listado', []))
    );
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + id).pipe(
      catchError(this.gestionarError<Persona>('Obtener persona por id', new Persona()))
    );
  }

  postPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona).pipe(
      this.tapTostada('Se ha añadido a ', persona.nombre),
      catchError(this.gestionarError<Persona>('Alta de persona', persona))
    );
  }

  putPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.url + persona.id, persona).pipe(
      this.tapTostada('Se ha modificado ', persona.nombre),
      catchError(this.gestionarError<Persona>('Modificación de persona', persona))
    );
  }

  deletePersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(this.url + id).pipe(
      this.tapTostada('Se ha borrado la persona cuyo id es ', id),
      catchError(this.gestionarError<Persona>('Borrado de persona', new Persona()))
    );
  }

  private abrirTostada(mensaje: string, dato: number | string, boton: string = 'Cerrar', duracion: number = 0) {
    return this.snackBar.open(mensaje + dato, boton, { duration: duracion });
  }

  private tapTostada(mensaje: string, dato: number | string) {
    return tap<Persona>(_ => this.abrirTostada(mensaje, dato, 'Cerrar', 3000));
  }

  private gestionarError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(operation, error);

      this.abrirTostada(operation + ' ha fallado', 'Cerrar');

      return of(result as T);
    };
  }
}
