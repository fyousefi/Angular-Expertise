import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../user';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  private url = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url);
  }

  private handleError<T>(operation = 'operation', result?: T):any {
    return(error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.log(error);

      // Let the app keep running by returning an empty result
      return of(result as T);
    };
  }
}
