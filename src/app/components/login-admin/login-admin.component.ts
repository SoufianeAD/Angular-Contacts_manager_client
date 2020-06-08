import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {

  form: FormGroup;
  message: string = null;

  constructor(private router: Router,
              public authService: AuthService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl(),
    });
  }

  get userName() { return this.form.get('userName'); }

  get password() { return this.form.get('password'); }

  onSubmit() {
    this.authService.signInAdmin(this.userName.value, this.password.value);
    this.message = 'Nom d\'utilisateur ou mot de passe incorretce!';
  }

}
