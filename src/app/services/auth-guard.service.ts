import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        if (localStorage.getItem('activeUser') === null) {
          this.router.navigate(['']);
          resolve(false);
        } else {
          resolve(true);
        }
      }
    );
  }
}
