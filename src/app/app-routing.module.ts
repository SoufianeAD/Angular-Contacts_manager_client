import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEntrepriseComponent} from './utilisateur/entreprise/create-entreprise/create-entreprise.component';
import {ListEntrepriseComponent} from './utilisateur/entreprise/list-entreprise/list-entreprise.component';
import {UpdateEntrepriseComponent} from './utilisateur/entreprise/update-entreprise/update-entreprise.component';
import {CreateContactComponent} from './utilisateur/contact/create-contact/create-contact.component';
import {ListContactComponent} from './utilisateur/contact/list-contact/list-contact.component';
import {UpdateContactComponent} from './utilisateur/contact/update-contact/update-contact.component';


const routes: Routes = [
  // Entreprise
  { path: 'create-entreprise', component: CreateEntrepriseComponent},
  { path: 'list-entreprise', component: ListEntrepriseComponent},
  { path: 'update-entreprise/:id', component: UpdateEntrepriseComponent},
  // Contact
  { path: 'create-contact', component: CreateContactComponent},
  { path: 'list-contact', component: ListContactComponent},
  { path: 'update-contact/:id', component: UpdateContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
