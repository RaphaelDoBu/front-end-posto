import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl:string='http://localhost:8080/cliente';
  clientes: any;

  constructor(private http:HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/cliente');

  }

}
