import {Entreprise} from './Entreprise.models';

export class Contact {
  id: number;
  nom: string;
  prenom: string;
  fonction: string;
  profil: string;
  entreprise: Entreprise;

  constructor() {}
}
