import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {
  private baseUrl:string='http://posto-server.herokuapp.com/combustivel';
  idPost: number;

  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': '*' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }

  createCombustivelPosto(idPosto: any, combustivel: any) : Observable<any> {
    return this.http.post("http://posto-server.herokuapp.com/posto/" + idPosto +
                          "/combustivel", combustivel);
  }

  listaCombustiveis(idPosto : any) : Observable<any> {
    this.idPost = idPosto;
    return this.http.get("http://posto-server.herokuapp.com/" +idPosto +"/combustiveis");
  }

  buscarPosto(idPosto : any) : Observable<any>{
    return this.http.get("http://posto-server.herokuapp.com/" +idPosto);
  }

}
