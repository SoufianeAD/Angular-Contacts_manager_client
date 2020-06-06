import {Contact} from './Contact.models';

export class Entreprise {
  id: number;
  nom: string;
  nombreEmploye: number;
  secteurActivite: string;
  ville: string;
  pays: string;
  contacts: Contact[] = [];

  constructor() {}
}
