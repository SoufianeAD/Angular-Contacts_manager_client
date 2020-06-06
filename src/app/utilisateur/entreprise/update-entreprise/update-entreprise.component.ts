import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EntrepriseService} from '../../../services/entreprise.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Entreprise} from '../../../models/Entreprise.models';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.scss']
})
export class UpdateEntrepriseComponent implements OnInit {

  form: FormGroup;
  currentEntreprise: Entreprise;
  listSecteurActivite = ['Developpement Web', 'Developpement Mobile', 'Administration Systeme', 'Sciences Donnees', 'BI', 'Autre'];

  constructor(public entrepriseService: EntrepriseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        const id = params.get('id');
        this.currentEntreprise = this.entrepriseService.findById(+id);
        this.init();
      }
    );
  }

  init() {
    this.form = new FormGroup({
      nom: new FormControl(this.currentEntreprise.nom, Validators.required),
      secteurActivite: new FormControl( this.listSecteurActivite, Validators.required),
      ville: new FormControl(this.currentEntreprise.ville, Validators.required),
      pays: new FormControl(this.currentEntreprise.pays, Validators.required),
      nombreEmploye: new FormControl(this.currentEntreprise.nombreEmploye, Validators.pattern(/[0-9]/))
    });
  }

  get nom() { return this.form.get('nom'); }

  get secteurActivite() { return this.form.get('secteurActivite'); }

  get ville() { return this.form.get('ville'); }

  get pays() { return this.form.get('pays'); }

  get nombreEmploye() { return this.form.get('nombreEmploye'); }

  onSubmit() {
    if (confirm('Confirmer la modification ? ')) {
      this.currentEntreprise.nom = this.form.get('nom').value;
      this.currentEntreprise.secteurActivite = this.form.get('secteurActivite').value;
      this.currentEntreprise.ville = this.form.get('ville').value;
      this.currentEntreprise.pays = this.form.get('pays').value;
      this.currentEntreprise.nombreEmploye = this.form.get('nombreEmploye').value;
      this.entrepriseService.update(this.currentEntreprise);
    }
    this.router.navigate(['/list-entreprise']);
  }

}
