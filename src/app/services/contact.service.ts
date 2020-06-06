import { Injectable } from '@angular/core';
import {Contact} from '../models/Contact.models';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];
  contactSubject = new Subject<Contact[]>();
  url = 'http://localhost:8080/contact';

  constructor(private http: HttpClient) {
    this.getAll();
  }

  emitSubject() {
    this.contactSubject.next(this.contacts);
  }

  add(contact: Contact) {
    this.http.post<Contact>(this.url + '/add', contact).subscribe(
      (data: Contact) => {
        this.contacts.push(data);
        console.log('Entreprise create ok!');
      }, (error) => {
        console.log('Contact create error: ' + error);
      }
    );
  }

  getAll() {
    this.http.get<Contact[]>(this.url + '/getAll').subscribe(
      (data: Contact[]) => {
        this.contacts = data;
        this.emitSubject();
      }, (error) => {
        console.log('Contact getAll error: ' + error);
      }
    );
  }

  delete(contact: Contact) {
    const index = this.contacts.indexOf(contact);
    this.contacts.splice(index, 1);
    this.http.delete(this.url + '/delete/' + contact.id).subscribe(
      () => {
        console.log('Contact delete ok!');
      }, (error) => {
        console.log('Entreprise delete error: ' + error);
      }
    );
  }

  findById(id: number): Contact {
    return this.contacts.find(e => e.id === id);
  }

  update(contact: Contact) {
    this.http.put<Contact>(this.url + '/update', contact).subscribe(
      (data: Contact) => {
        this.getAll();
        console.log('Contact update ok!');
      }, (error) => {

      }
    );
  }

  getById(id: number) {
    return this.http.get<Contact>(this.url + '/getById/' + id);
  }

}
