import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl:string='http://localhost:8080/cliente';
  clientes: any;
  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': '*' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }

  createUser(user: any) : Observable<any> {
    console.log(user)
    return this.http.post(this.baseUrl, user);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
