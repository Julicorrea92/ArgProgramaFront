import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  
  expUrl: string ='https://back-portfoliocorreajulian.herokuapp.com/explab/'; //URL Heroku
    //expUrl: string = 'http://localhost:8080/explab/'; //url local
  
    constructor(private httpClient: HttpClient) {}
  
      public obtenerExperiencia(): Observable<Experiencia[]>{

        return this.httpClient.get<Experiencia[]>(this.expUrl+ 'ver') 
      }

      public detalle(id: number): Observable<Experiencia>{
        return this.httpClient.get<Experiencia>(this.expUrl + `detalle/${id}`);
      }

      public save(experiencia: Experiencia): Observable<any>{
        return this.httpClient.post<any>(this.expUrl + 'new', experiencia);
      }

      /* public editar(experiencia: Experiencia): Observable<Experiencia> {
        return this.httpClient.put<any>(this.expUrl + 'editar', experiencia);
      } */

      public editar(id: number, experiencia: Experiencia): Observable<any>{
         return this.httpClient.put<any>(this.expUrl + `editar/${id}`, experiencia);
      } 

      public delete (id: number): Observable<any> {
        return this.httpClient.delete<any>(this.expUrl + `borrar/${id}`);
      }

      
  }
