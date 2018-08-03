import { Injectable } from '@angular/core';
import { Posto } from '../model/posto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { RequestOptions, Headers, Http } from '@angular/http';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // baseUrl: 'http://localhost:8080/email2sms/';

  constructor(private http: HttpClient) {
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log(ussername);
  
    console.log('attempAuth ::');
    return this.http.post('http://posto-server.herokuapp.com/token/generate-token', credentials);
  }

  buscarAutenticado(ussername: string, password: string): Observable<any> {
    const credentials = {username: ussername, password: password};
    console.log('attempAuth ::');
    return this.http.post('http://posto-server.herokuapp.com/token/usuario-autenticado',credentials);
  }
}
