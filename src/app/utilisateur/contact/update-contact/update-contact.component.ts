import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Entreprise} from '../../../models/Entreprise.models';
import {Subscription} from 'rxjs';
import {EntrepriseService} from '../../../services/entreprise.service';
import {ContactService} from '../../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../../models/Contact.models';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  form: FormGroup;
  entreprises: Entreprise[] = [];
  subscritpion: Subscription;
  currentContact: Contact;

  constructor(public entrepriseService: EntrepriseService,
              public contactService: ContactService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscritpion = this.entrepriseService.entreprisesSubject.subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;
      }
    );
    this.entrepriseService.getAll();
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        const id = params.get('id');
        this.currentContact = this.contactService.findById(+id);
      }
    );
    this.init();
  }

  init() {
    this.form = new FormGroup({
      nom: new FormControl(this.currentContact.nom, Validators.required),
      prenom: new FormControl(this.currentContact.prenom, Validators.required),
      fonction: new FormControl(this.currentContact.fonction, Validators.required),
      profil: new FormControl(this.currentContact.profil, Validators.required),
      entreprise: new FormControl(this.entreprises, Validators.required),
    });
  }

  get nom() { return this.form.get('nom'); }

  get prenom() { return this.form.get('prenom'); }

  get fonction() { return this.form.get('fonction'); }

  get profil() { return this.form.get('profil'); }

  get entreprise() { return this.form.get('entreprise'); }

  onSubmit() {
    this.currentContact.nom = this.form.get('nom').value;
    this.currentContact.prenom = this.form.get('prenom').value;
    this.currentContact.fonction = this.form.get('fonction').value;
    this.currentContact.profil = this.form.get('profil').value;
    this.currentContact.entreprise = this.form.get('entreprise').value;
    this.contactService.update( this.currentContact);
    this.router.navigate(['/list-contact']);
  }

  compareEntreprise(a, b) {
    return a.id === b.id;
  }

}
