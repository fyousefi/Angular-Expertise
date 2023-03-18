import { Component } from '@angular/core';
import { ReqresService } from 'src/app/services/reqres.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private reqresService: ReqresService) {}

}
