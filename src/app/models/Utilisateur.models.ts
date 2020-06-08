import {Role} from './Role.models';

export class Utilisateur {
  id: number;
  userName: string;
  password: string;
  roles: Role[] = [];

  constructor() {}
}
