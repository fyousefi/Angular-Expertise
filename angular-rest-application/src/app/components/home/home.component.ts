import { Component } from '@angular/core';
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
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        );
    }

}
