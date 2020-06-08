import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Role} from '../models/Role.models';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roles: Role[] = [];
  roleSubject = new Subject<Role[]>();
  url = 'http://localhost:8080/role';

  constructor(private http: HttpClient) { }

  emitSubject() {
    this.roleSubject.next(this.roles);
  }

  getAll() {
    this.http.get<Role[]>(this.url + '/getAll').subscribe(
      (data: Role[]) => {
        this.roles = data;
        this.emitSubject();
      }, (error) => {
        console.log('Role getAll error : ' + JSON.stringify(error));
      }
    );
  }
}
