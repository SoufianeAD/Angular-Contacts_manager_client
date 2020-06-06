import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../../../models/Entreprise.models';
import {Subscription} from 'rxjs';
import {EntrepriseService} from '../../../services/entreprise.service';
import {Router} from '@angular/router';
import {Contact} from '../../../models/Contact.models';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  list: Contact[] = [];
  subscription: Subscription;

  constructor(public contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.subscription = this.contactService.contactSubject.subscribe(
      (data: Contact[]) => {
        this.list = data;
      }
    );
    this.contactService.getAll();
  }

  onDelete(contact: Contact) {
    if (confirm('Confirmez la suppression ?')) {
      this.contactService.delete(contact);
    }
  }

  onEdit(contact: Contact) {
    this.router.navigate(['/update-contact', contact.id]);
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
