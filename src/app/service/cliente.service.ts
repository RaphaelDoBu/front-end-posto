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

  constructor(private http:HttpClient) { }

  createUser(user) {
    return this.http.post<Cliente>(this.baseUrl, user);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
