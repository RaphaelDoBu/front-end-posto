import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl:string='https://posto-server.herokuapp.com/cliente';
  clientes: any;
  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': 'https://posto-server.herokuapp.com' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }

  createUser(user: any) : Observable<any> {
    console.log(user)
    return this.http.post(this.baseUrl, user);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl+"s");
  }
}
