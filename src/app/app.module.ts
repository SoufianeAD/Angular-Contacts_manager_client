import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEntrepriseComponent } from './utilisateur/entreprise/create-entreprise/create-entreprise.component';
import {EntrepriseService} from './services/entreprise.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import { UtilisateurNavbarComponent } from './utilisateur/utilisateur-navbar/utilisateur-navbar.component';
import { ListEntrepriseComponent } from './utilisateur/entreprise/list-entreprise/list-entreprise.component';
import { UpdateEntrepriseComponent } from './utilisateur/entreprise/update-entreprise/update-entreprise.component';
import { CreateContactComponent } from './utilisateur/contact/create-contact/create-contact.component';
import {ContactService} from './services/contact.service';
import { ListContactComponent } from './utilisateur/contact/list-contact/list-contact.component';
import { UpdateContactComponent } from './utilisateur/contact/update-contact/update-contact.component';
import { ListUtilisateurComponent } from './admin/list-utilisateur/list-utilisateur.component';
import { CreateUtilisateurComponent } from './admin/create-utilisateur/create-utilisateur.component';
import { UpdateUtilisateurProfilComponent } from './utilisateur/update-utilisateur-profil/update-utilisateur-profil.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { LoginUtilisateurComponent } from './components/login-utilisateur/login-utilisateur.component';
import { HomeComponent } from './components/home/home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import {UtilisateurService} from './services/utilisateur.service';
import {RoleService} from './services/role.service';
import {AuthService} from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEntrepriseComponent,
    UtilisateurNavbarComponent,
    ListEntrepriseComponent,
    UpdateEntrepriseComponent,
    CreateContactComponent,
    ListContactComponent,
    UpdateContactComponent,
    ListUtilisateurComponent,
    CreateUtilisateurComponent,
    UpdateUtilisateurProfilComponent,
    LoginAdminComponent,
    LoginUtilisateurComponent,
    HomeComponent,
    AdminNavbarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],
  providers: [
    EntrepriseService,
    ContactService,
    UtilisateurService,
    RoleService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
