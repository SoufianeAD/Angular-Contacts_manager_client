import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Utilisateur} from './models/Utilisateur.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ContactsManager';

  activeUser: Utilisateur;

  constructor(public authService: AuthService) {
    this.authService.getLoggedInUser.subscribe(utilisateur => this.changeActiveUser(utilisateur));
  }

  changeActiveUser(utilisateur: Utilisateur) {
    this.activeUser = utilisateur;
  }
}
