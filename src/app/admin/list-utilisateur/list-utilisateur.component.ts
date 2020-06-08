import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/Contact.models';
import {Subscription} from 'rxjs';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {Utilisateur} from '../../models/Utilisateur.models';
import {UtilisateurService} from '../../services/utilisateur.service';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit {

  list: Utilisateur[] = [];
  subscription: Subscription;

  constructor(public utilisateurService: UtilisateurService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.subscription = this.utilisateurService.utilisateurSubject.subscribe(
      (data: Utilisateur[]) => {
        this.list = data;
      }
    );
    this.utilisateurService.getAll();
  }

  onDelete(utilisateur: Utilisateur) {
    if (confirm('Confirmez la suppression ?')) {
      this.utilisateurService.delete(utilisateur);
    }
  }

  onResetPassword(utilisateur: Utilisateur) {
    utilisateur.password = utilisateur.userName + '/1234';
    this.utilisateurService.update(utilisateur);
  }

  onFilter() {

    const searchKey = (document.getElementById('searchInput') as HTMLInputElement).value.toLowerCase();
    if (searchKey === '') {
      this.refresh();
    } else {
      this.list.forEach(
        e => {
          if (!JSON.stringify(e).toString().toLowerCase().includes(searchKey)) {
            const index = this.list.indexOf(e);
            this.list.splice(index, 1);
          }
        }
      );

    }
  }

  onClear() {
    (document.getElementById('searchInput') as HTMLInputElement).value = '';
    this.refresh();
  }

}
