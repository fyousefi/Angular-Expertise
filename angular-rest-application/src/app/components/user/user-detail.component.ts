import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqresService } from 'src/app/services/reqres.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

    user: User = {
        id: 0,
        first_name: '',
        last_name: '',
        avatar: ''
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private reqresService: ReqresService
    ) {}

}
