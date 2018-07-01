import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombustivelService {
 
  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': '*' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }



  listaCombustiveis(posto: any) : Observable<any> {
    console.log(posto)
    return this.http.get("http://localhost:8080/combustiveis");
  }

}
