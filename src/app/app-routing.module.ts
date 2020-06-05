import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEntrepriseComponent} from './utilisateur/entreprise/create-entreprise/create-entreprise.component';
import {ListEntrepriseComponent} from './utilisateur/entreprise/list-entreprise/list-entreprise.component';
import {UpdateEntrepriseComponent} from './utilisateur/entreprise/update-entreprise/update-entreprise.component';


const routes: Routes = [
  { path: 'create-entreprise', component: CreateEntrepriseComponent},
  { path: 'list-entreprise', component: ListEntrepriseComponent},
  { path: 'update-entreprise/:id', component: UpdateEntrepriseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
