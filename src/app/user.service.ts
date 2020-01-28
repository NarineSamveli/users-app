import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  // url = "https://jsonplaceholder.typicode.com/users/";
  url = 'http://localhost:3000/users/';
  public getAll() {
    return this._http.get(this.url);
  }
  getUser(id: string|number) {
    return this._http.get(this.url + id);
  }

}
