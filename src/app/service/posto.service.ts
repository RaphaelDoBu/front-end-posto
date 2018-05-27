import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostoService {
  private baseUrl:string='http://localhost:8080/posto';

  headers: { 'Content-Type': 'application/json' ,
                        'X-Requested-With': 'XMLHttpRequest', 
                        'Access-Control-Allow-Origin': '*' ,
                        'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
                    }

  constructor(private http:HttpClient) { }

  createPosto(posto: any) : Observable<any> {
    console.log(posto)
    return this.http.post(this.baseUrl, posto);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl+"s");
  }

}
