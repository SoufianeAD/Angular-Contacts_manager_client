import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EntrepriseService} from '../../../services/entreprise.service';
import {Router} from '@angular/router';
import {Entreprise} from '../../../models/Entreprise.models';
import {ContactService} from '../../../services/contact.service';
import {Subscription} from 'rxjs';
import {Contact} from '../../../models/Contact.models';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

  form: FormGroup;
  entreprises: Entreprise[] = [];
  subscritpion: Subscription;

  constructor(public entrepriseService: EntrepriseService,
              public contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.subscritpion = this.entrepriseService.entreprisesSubject.subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;
      }
    );
    this.entrepriseService.getAll();
    this.init();
  }

  init() {
    this.form = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      fonction: new FormControl('', Validators.required),
      profil: new FormControl('', Validators.required),
      entreprise: new FormControl(this.entreprises, Validators.required),
    });
  }

  get nom() { return this.form.get('nom'); }

  get prenom() { return this.form.get('prenom'); }

  get fonction() { return this.form.get('fonction'); }

  get profil() { return this.form.get('profil'); }

  get entreprise() { return this.form.get('entreprise'); }

  onSubmit() {
    alert('add contact');
    const contact = new Contact();
    contact.nom = this.form.get('nom').value;
    contact.prenom = this.form.get('prenom').value;
    contact.fonction = this.form.get('fonction').value;
    contact.profil = this.form.get('profil').value;
    contact.entreprise = this.form.get('entreprise').value;
    this.contactService.add(contact);
    this.router.navigate(['/list-contact']);
  }
}
