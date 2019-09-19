import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';

import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';

import { FormsModule } from '@angular/forms';
import { TituloComponent } from './titulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    DetalleComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
