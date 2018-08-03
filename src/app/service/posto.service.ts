import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const USER = 'usuarioLog';

@Injectable({
  providedIn: 'root'
})
export class PostoService {
  private baseUrl:string='https://posto-server.herokuapp.com/';
  user: String;

  constructor(private http:HttpClient) { }

  createPosto(posto: any) : Observable<any> {
    console.log(posto)
    return this.http.post(this.baseUrl, posto);
  }

  getAll(): Observable<any> {
    return this.http.get("https://posto-server.herokuapp.com/");
  }

  
}
