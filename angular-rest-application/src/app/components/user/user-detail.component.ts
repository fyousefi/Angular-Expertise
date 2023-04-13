import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

    constructor(
        private activatedRoute: ActivatedRoute,
        private reqresService: ReqresService
    ) {}

}
