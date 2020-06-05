import { Injectable } from '@angular/core';
import {Entreprise} from '../models/Entreprise.models';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  entreprises: Entreprise[] = [];
  entreprisesSubject = new Subject<Entreprise[]>();
  url = 'http://localhost:8080/entreprise';

  constructor(private http: HttpClient) { }

  emitSubject() {
    this.entreprisesSubject.next(this.entreprises);
  }

  add(entreprise: Entreprise) {
    this.http.post<Entreprise>(this.url + '/add', entreprise).subscribe(
      (data: Entreprise) => {
        this.entreprises.push(data);
        console.log('Entreprise create ok!');
      }, (error) => {
        console.log('Entreprise create error : ' + error);
    }
    );
  }

  getAll() {
    this.http.get<Entreprise[]>(this.url + '/getAll').subscribe(
      (data: Entreprise[]) => {
        this.entreprises = data;
        this.emitSubject();
      }, (error) => {
        console.log('Entreprise getAll error: ' + error);
      }
    );
  }

  delete(entreprise: Entreprise) {
    const index = this.entreprises.indexOf(entreprise);
    this.entreprises.splice(index, 1);
    this.http.delete(this.url + '/delete/' + entreprise.id).subscribe(
      () => {
        console.log('Entreprise delete ok!');
      }, error => {
        console.log('Entreprise delete error: ' + error);
      }
    );
  }

  findById(id: number): Entreprise {
    return this.entreprises.find( e => e.id === id);
  }

  update(entreprise: Entreprise) {
    confirm('Confirmer la modification ? ' + JSON.stringify(entreprise));
    this.http.put<Entreprise>(this.url + '/update', entreprise).subscribe(
      (data: Entreprise) => {
        this.getAll();
        console.log('Entreprise update ok!');
      }, error => {
        console.log('Entreprise update error: ' + error);
      }
    );
  }

}
