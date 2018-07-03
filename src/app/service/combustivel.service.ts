import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {
  private baseUrl:string='http://localhost:8080/combustivel';
  idPost: number;

  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': '*' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }

  createCombustivelPosto(idPosto: any, combustivel: any) : Observable<any> {
    console.log(idPosto)
    return this.http.post("http://localhost:8080/posto/" + idPosto +
                          "/combustivel", combustivel);
  }

  listaCombustiveis(idPosto : any) : Observable<any> {
    console.log(idPosto.type)
    this.idPost = idPosto;
    console.log(this.idPost)
    // this.idPosto = idPosto;
    return this.http.get("http://localhost:8080/posto/" +idPosto +"/combustiveis");
  } 

}
