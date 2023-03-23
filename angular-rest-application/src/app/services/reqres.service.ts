import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  private url = 'api/users';

  constructor(private http: HttpClient) { }
}
