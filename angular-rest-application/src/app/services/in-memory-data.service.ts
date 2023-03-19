import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const users = [
        { id: 11, first_name: 'Matthew', last_name: 'Collins', avatar: 'assets/img/user.jpg' },
        { id: 12, first_name: 'Kyle', last_name: 'Munoz', avatar: 'assets/img/user.jpg' },
        { id: 13, first_name: 'Laura', last_name: 'Adkins', avatar: 'assets/img/user.jpg' },
        { id: 14, first_name: 'Kara', last_name: 'Vargas', avatar: 'assets/img/user.jpg' },
        { id: 15, first_name: 'Austin', last_name: 'Sawyer', avatar: 'assets/img/user.jpg' },
        { id: 16, first_name: 'Bruce', last_name: 'Bautista', avatar: 'assets/img/user.jpg' },
        { id: 17, first_name: 'Lisa', last_name: 'Griffin', avatar: 'assets/img/user.jpg' },
        { id: 18, first_name: 'Jason', last_name: 'Burns', avatar: 'assets/img/user.jpg' },
        { id: 19, first_name: 'Tyler', last_name: 'Romero', avatar: 'assets/img/user.jpg' },
        { id: 20, first_name: 'Kathryn', last_name: 'Williams', avatar: 'assets/img/user.jpg' }
    ];
    return { users };
  }
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
