import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/formacion-academica';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  urlEdu = 'https://portfoliocorreajulian-julicorrea92.koyeb.app/educacion/'//URL Koyeb

//'https://back-portfoliocorreajulian.herokuapp.com/educacion/'; //URL Heroku

//urlEdu = 'http://localhost:8080/educacion/'; //url local

  constructor(private httpClient: HttpClient) { }

  public obtenerEducacion(): Observable<Educacion[]> {

    return this.httpClient.get<Educacion[]>(this.urlEdu + 'ver');
  }

  public detalle(id: number): Observable<Educacion> {
    return this.httpClient.get<Educacion>(this.urlEdu + `detalle/${id}`);
  }

  public save(educacion: Educacion): Observable<any> {
    return this.httpClient.post<any>(this.urlEdu + 'new', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.urlEdu + `editar/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.urlEdu+ `borrar/${id}`);
  }
}
