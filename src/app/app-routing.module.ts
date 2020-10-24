import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonaComponent} from './componentes/personas/personas.component';
import {SearchComponent} from './componentes/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'Nuevo',
    component: PersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
