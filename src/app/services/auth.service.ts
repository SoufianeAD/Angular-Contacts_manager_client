import {EventEmitter, Injectable, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {Utilisateur} from '../models/Utilisateur.models';
import {UtilisateurService} from './utilisateur.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output() getLoggedInUser: EventEmitter<Utilisateur> = new EventEmitter();
  activeUser: Utilisateur;

  constructor(public utilisateurService: UtilisateurService,
              private router: Router) {
    this.utilisateurService.getAll();
  }

  signInUtilisateur(userName: string, password: string) {
    this.activeUser = this.utilisateurService.findByUserNameAndPassword(userName, password);
    if (this.activeUser !== undefined) {
      localStorage.setItem('activeUser', JSON.stringify(this.activeUser));
      this.getLoggedInUser.emit(this.activeUser);
      this.router.navigate(['/list-contact']);
    }
  }

  signInAdmin(userName: string, password: string) {
    this.activeUser = this.utilisateurService.findByUserNameAndPassword(userName, password);
    if (this.activeUser !== undefined && JSON.stringify(this.activeUser.roles).includes('admin')) {
      localStorage.setItem('activeUser', JSON.stringify(this.activeUser));
      this.getLoggedInUser.emit(this.activeUser);
      this.router.navigate(['/list-utilisateur']);
    }
  }

  signOut() {
    localStorage.clear();
    this.activeUser = undefined;
    this.getLoggedInUser.emit(this.activeUser);
    this.router.navigate(['/']);
  }
}
