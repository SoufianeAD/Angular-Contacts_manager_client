import { Injectable } from '@angular/core';
import {Utilisateur} from '../models/Utilisateur.models';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Entreprise} from '../models/Entreprise.models';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateurs: Utilisateur[] = [];
  utilisateurSubject = new Subject<Utilisateur[]>();
  url = 'http://localhost:8080/utilisateur';

  constructor(private http: HttpClient) { }

  emitSubject() {
    this.utilisateurSubject.next(this.utilisateurs);
  }

  add(utilisateur: Utilisateur) {
    this.http.post<Utilisateur>(this.url + '/add', utilisateur).subscribe(
      (data: Utilisateur) => {
        this.utilisateurs.push(data);
        console.log('Utilisateur create ok!');
      }, (error) => {
        console.log('Utilisateur create error : ' + error);
      }
    );
  }

  getAll() {
    this.http.get<Utilisateur[]>(this.url + '/getAll').subscribe(
      (data: Utilisateur[]) => {
        this.utilisateurs = data;
        this.emitSubject();
      }, (error) => {
        console.log('Utilisateur getAll error : ' + error);
      }
    );
  }

  delete(utilisateur: Utilisateur) {
    const index = this.utilisateurs.indexOf(utilisateur);
    this.utilisateurs.splice(index, 1);
    this.http.delete(this.url + '/delete/' + utilisateur.id).subscribe(
      () => {
        console.log('Utilisateur delete ok!');
      }, (error) => {
        console.log('Utilisateur delete error: ' + error);
      }
    );
  }

  findById(id: number): Utilisateur {
    return this.utilisateurs.find( e => e.id === id);
  }

  findByUserNameAndPassword(username: string, password: string): Utilisateur {
    return this.utilisateurs.find( e => e.userName.toLowerCase() === username.toLowerCase()
      && e.password.toLowerCase() === password.toLowerCase());
  }

  update(utilisateur: Utilisateur) {
    this.http.put<Utilisateur>(this.url + '/update', utilisateur).subscribe(
      (data: Utilisateur) => {
        this.getAll();
        console.log('Utilisateur update ok!');
      }, error => {
        console.log('Utilisateur update error: ' + error);
      }
    );
  }
}
