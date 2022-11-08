import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReqresService } from 'src/app/services/reqres.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    users: User[] = [];

    constructor(private reqresService: ReqresService) {
        this.getUser();
    }

    getUser() {
        this.reqresService.getUsers().subscribe(
            (res: User[]) => {
                this.users = res;
            },
            (err) => {
                console.log(err);
            }
        );
    }

    userDetails(id: number) {
        console.log('User id:', id);
    }

}
