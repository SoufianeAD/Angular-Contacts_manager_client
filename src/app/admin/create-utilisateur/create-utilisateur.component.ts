import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {Role} from '../../models/Role.models';
import {RoleService} from '../../services/role.service';
import {UtilisateurService} from '../../services/utilisateur.service';
import {Utilisateur} from '../../models/Utilisateur.models';

@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.scss']
})
export class CreateUtilisateurComponent implements OnInit {

  form: FormGroup;
  roles: Role[] = [];
  subscritpion: Subscription;

  constructor(public roleService: RoleService,
              public utilisateurService: UtilisateurService,
              private router: Router) { }

  ngOnInit() {
    this.subscritpion = this.roleService.roleSubject.subscribe(
      (data: Role[]) => {
        this.roles = data;
      }
    );
    this.roleService.getAll();
    this.init();
  }

  init() {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      roleAdmin: new FormControl(),
      roleUtilisateur: new FormControl(),
    });
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.roles.forEach(e => {
      const control = new FormControl(false);
      (this.form.controls.choices as FormArray).push(control);
    });
  }

  get userName() { return this.form.get('userName'); }

  findRole(role: string): Role {
    return this.roles.find(e => e.role === role);
  }

  onSubmit() {
    const utilisateur = new Utilisateur();
    utilisateur.userName = this.form.get('userName').value;
    utilisateur.password = this.form.get('userName').value + '/1234';
    if (this.form.get('roleAdmin').value && this.form.get('roleUtilisateur').value) {
      utilisateur.roles = this.roles;
    } else if (this.form.get('roleAdmin').value) {
      utilisateur.roles.push(this.findRole('admin'));
    } else {
      utilisateur.roles.push(this.findRole('utilisateur'));
    }
    this.utilisateurService.add(utilisateur);
    this.router.navigate(['/list-utilisateur']);
  }

}
