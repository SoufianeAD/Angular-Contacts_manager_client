import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../../../models/Entreprise.models';
import {Subscription} from 'rxjs';
import {EntrepriseService} from '../../../services/entreprise.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.scss']
})
export class ListEntrepriseComponent implements OnInit {

  list: Entreprise[] = [];
  subscription: Subscription;

  constructor(public entrepriseService: EntrepriseService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.subscription = this.entrepriseService.entreprisesSubject.subscribe(
      (data: Entreprise[]) => {
        this.list = data;
      }
    );
    this.entrepriseService.getAll();
  }

  onDelete(entreprise: Entreprise) {
    if (confirm('Confirmez la suppression ?')) {
      this.entrepriseService.delete(entreprise);
    }
  }

  onEdit(entreprise: Entreprise) {
    this.router.navigate(['/update-entreprise', entreprise.id]);
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
