import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEntrepriseComponent } from './utilisateur/entreprise/create-entreprise/create-entreprise.component';
import {MaterialModule} from './material/material.module';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],
  providers: [
    EntrepriseService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
