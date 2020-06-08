import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEntrepriseComponent} from './utilisateur/entreprise/create-entreprise/create-entreprise.component';
import {ListEntrepriseComponent} from './utilisateur/entreprise/list-entreprise/list-entreprise.component';
import {UpdateEntrepriseComponent} from './utilisateur/entreprise/update-entreprise/update-entreprise.component';
import {CreateContactComponent} from './utilisateur/contact/create-contact/create-contact.component';
import {ListContactComponent} from './utilisateur/contact/list-contact/list-contact.component';
import {UpdateContactComponent} from './utilisateur/contact/update-contact/update-contact.component';
import {CreateUtilisateurComponent} from './admin/create-utilisateur/create-utilisateur.component';
import {ListUtilisateurComponent} from './admin/list-utilisateur/list-utilisateur.component';
import {HomeComponent} from './components/home/home.component';
import {LoginUtilisateurComponent} from './components/login-utilisateur/login-utilisateur.component';
import {LoginAdminComponent} from './components/login-admin/login-admin.component';
import {AuthGuardService} from './services/auth-guard.service';


const routes: Routes = [
  // Entreprise
  { path: 'create-entreprise', canActivate: [AuthGuardService], component: CreateEntrepriseComponent},
  { path: 'list-entreprise', canActivate: [AuthGuardService], component: ListEntrepriseComponent},
  { path: 'update-entreprise/:id', canActivate: [AuthGuardService], component: UpdateEntrepriseComponent},
  // Contact
  { path: 'create-contact', canActivate: [AuthGuardService], component: CreateContactComponent},
  { path: 'list-contact', canActivate: [AuthGuardService], component: ListContactComponent},
  { path: 'update-contact/:id', canActivate: [AuthGuardService], component: UpdateContactComponent},
  //
  { path: 'create-utilisateur', canActivate: [AuthGuardService], component: CreateUtilisateurComponent},
  { path: 'list-utilisateur', canActivate: [AuthGuardService], component: ListUtilisateurComponent},
  //
  { path: '', component: HomeComponent},
  { path: 'login-utilisateur', component: LoginUtilisateurComponent},
  { path: 'login-admin', component: LoginAdminComponent},
  //
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
