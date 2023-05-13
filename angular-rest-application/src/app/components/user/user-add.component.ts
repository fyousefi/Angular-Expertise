import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReqresService } from 'src/app/services/reqres.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css'
})
export class UserAddComponent {
  userForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private reqresService: ReqresService,
    private router:Router
  ){
    this.userForm = this.formBuilder.group({

    });
  }
}
