import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEntrepriseComponent} from './utilisateur/entreprise/create-entreprise/create-entreprise.component';


const routes: Routes = [
  { path: 'create-entreprise', component: CreateEntrepriseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
