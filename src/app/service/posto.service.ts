import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const USER = 'usuarioLog';

@Injectable({
  providedIn: 'root'
})
export class PostoService {
  private baseUrl:string='http://posto-server.herokuapp.com/posto';
  user: String;

  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': 'http://posto-server.herokuapp.com' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }

  createPosto(posto: any) : Observable<any> {
    console.log(posto)
    return this.http.post(this.baseUrl, posto);
  }

  getAll(): Observable<any> {
    return this.http.get("http://posto-server.herokuapp.com/postos");
  }

  
}
