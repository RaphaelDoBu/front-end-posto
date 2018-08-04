import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {
  private baseUrl:string='https://posto-server.herokuapp.com/posto/';
  idPost: number;

  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': 'https://posto-server.herokuapp.com' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }

  createCombustivelPosto(idPosto: any, combustivel: any) : Observable<any> {
    return this.http.post(this.baseUrl + idPosto +
                          "/combustivel", combustivel);
  }

  listaCombustiveis(idPosto : any) : Observable<any> {
    this.idPost = idPosto;
    return this.http.get(this.baseUrl +idPosto +"/combustiveis");
  }

  buscarPosto(idPosto : any) : Observable<any>{
    return this.http.get(this.baseUrl +idPosto);
  }

}
