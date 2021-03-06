import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-utilisateur-navbar',
  templateUrl: './utilisateur-navbar.component.html',
  styleUrls: ['./utilisateur-navbar.component.scss']
})
export class UtilisateurNavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogOut() {
    this.authService.signOut();
  }

}
