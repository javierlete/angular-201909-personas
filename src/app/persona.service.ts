import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Persona } from './persona';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private url = 'http://localhost:3000/personas/';

  constructor(private http: HttpClient) {}

  personas: Persona[];

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }

  getPersona(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + id);
  }
}
