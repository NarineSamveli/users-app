import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  // url = "https://jsonplaceholder.typicode.com/users/"; http://localhost:3000/users/ https://4ddf7176.ngrok.io/
  url = 'http://localhost:3000/users/';
  // public getAll() {
  //   return this._http.get(this.url);
  // }
  public getBatch(start: number) {
    return this._http.get(this.url + start);
  }
  getUser(id: string|number) {
    return this._http.get(this.url + id);
  }

}

