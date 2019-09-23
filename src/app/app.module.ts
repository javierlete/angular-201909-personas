import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';

import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';

import { FormsModule } from '@angular/forms';
import { TituloComponent } from './titulo.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PruebaModalNgbootstrapComponent } from './prueba-modal-ngbootstrap/prueba-modal-ngbootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    TituloComponent,
    PruebaModalNgbootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
