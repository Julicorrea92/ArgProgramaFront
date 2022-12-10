import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = 'https://portfoliocorreajulian-julicorrea92.koyeb.app/persona/'// URL Koyeb
  
//'https://back-portfoliocorreajulian.herokuapp.com/persona/';// URL Heroku

//url: string = 'http://localhost:8080/persona/'; url local

  constructor(private http: HttpClient) {}

    public obtenerPersona(): Observable<any>{
      return this.http.get<any>(this.url+'ver');

    }
   
}
