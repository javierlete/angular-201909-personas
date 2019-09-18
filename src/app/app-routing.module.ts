import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { DetalleComponent } from './detalle/detalle.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/listado' },
  { path: 'listado', component: ListadoComponent },
  { path: 'detalle', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
