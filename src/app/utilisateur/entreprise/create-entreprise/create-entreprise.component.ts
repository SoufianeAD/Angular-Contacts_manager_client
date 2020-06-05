import { Component, OnInit } from '@angular/core';
import {EntrepriseService} from '../../../services/entreprise.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Entreprise} from '../../../models/Entreprise.models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-entreprise',
  templateUrl: './create-entreprise.component.html',
  styleUrls: ['./create-entreprise.component.scss']
})
export class CreateEntrepriseComponent implements OnInit {

  form: FormGroup;
  listSecteurActivite = ['Developpement Web', 'Developpement Mobile', 'Administration Systeme', 'Sciences Donnees', 'BI', 'Autre'];

  constructor(public entrepriseService: EntrepriseService,
              private router: Router) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.form = new FormGroup({
      nom: new FormControl('', Validators.required),
      secteurActivite: new FormControl(this.listSecteurActivite, Validators.required),
      ville: new FormControl('', Validators.required),
      pays: new FormControl('', Validators.required),
      nombreEmploye: new FormControl('', Validators.pattern(/[0-9]/))
    });
  }

  get nom() { return this.form.get('nom'); }

  get secteurActivite() { return this.form.get('secteurActivite'); }

  get ville() { return this.form.get('ville'); }

  get pays() { return this.form.get('pays'); }

  get nombreEmploye() { return this.form.get('nombreEmploye'); }

  onSubmit() {
    const entreprise = new Entreprise();
    entreprise.nom = this.form.get('nom').value;
    entreprise.secteurActivite = this.form.get('secteurActivite').value;
    entreprise.ville = this.form.get('ville').value;
    entreprise.pays = this.form.get('pays').value;
    entreprise.nombreEmploye = this.form.get('nombreEmploye').value;
    this.entrepriseService.add(entreprise);
    this.router.navigate(['/list-entreprise']);
  }

}
