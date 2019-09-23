import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    return this.http.get<Persona>(this.url + id);
  }

  postPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.url, persona);
  }

  putPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.url + persona.id, persona);
  }

  deletePersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(this.url + id);
  }

  private gestionarError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(operation, error);

      this.snackBar.open(operation + ' ha fallado', 'Cerrar');

      return of(result as T);
    };
  }
}
