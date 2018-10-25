import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:6565/users";
   }

   getBaseUrlById(id: number): string {
    return this.baseUrl + "/" + id;
  }

   getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  addUser(user: User): Observable<User> {
    return this.http.post(this.baseUrl, JSON.stringify(user), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }
}
