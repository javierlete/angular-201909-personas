import { Component } from '@angular/core';

@Component({
    selector: 'app-titulo',
    template: '<h1>{{titulo}}</h1>',
    styles: [`
        h1 {
            border: 1px solid black;
            padding: 1em;
            background: black;
            color: white;
        }`]
})
export class TituloComponent {
    titulo = 'Ejemplo de CRUD con personas';
}
