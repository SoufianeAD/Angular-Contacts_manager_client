import {Utilisateur} from './Utilisateur.models';

export class Role {
  id: number;
  role: string;
  utilisateurs: Utilisateur[] = [];

  constructor() {}
}
