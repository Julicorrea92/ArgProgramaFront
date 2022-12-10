import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { hardSkill } from '../model/skill';
import { softSkill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillUrl: string = 'https://portfoliocorreajulian-julicorrea92.koyeb.app/skills/'// URL Koyeb

//'https://back-portfoliocorreajulian.herokuapp.com/skills/'; //URL Heroku

//skillUrl: string = 'http://localhost:8080/skills/'; //url local

  constructor(private httpClient: HttpClient) { }

  public obtenerSkills(): Observable<hardSkill[]> {
    return this.httpClient.get<hardSkill[]>(this.skillUrl + 'ver');
  }

  public detalle(id: number): Observable<hardSkill> {
    return this.httpClient.get<hardSkill>(this.skillUrl + `detalle/${id}`);
  }

  public nuevo(skill: hardSkill): Observable<any> {
    return this.httpClient.post<any>(this.skillUrl + 'new', skill);
  }

  public update(id: number, skill: hardSkill): Observable<any>{
    return this.httpClient.put<any>(this.skillUrl + `editar/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skillUrl+ `borrar/${id}`);
  }
}

export class SkillService2 {

  skillUrl: string = 'http://localhost:8080/softskills/';

  constructor(private httpClient: HttpClient) { }

  public obtenerSkills2(): Observable<softSkill[]> {
    return this.httpClient.get<softSkill[]>(this.skillUrl + 'ver');
  }

  public detalle2(id: number): Observable<softSkill> {
    return this.httpClient.get<softSkill>(this.skillUrl + `detalle/${id}`);
  }

  public nuevo2(skill: softSkill): Observable<any> {
    return this.httpClient.post<any>(this.skillUrl + 'new', skill);
  }

  public update2(id: number, skill: hardSkill): Observable<any>{
    return this.httpClient.put<any>(this.skillUrl + `editar/${id}`, skill);
  }

  public delete2(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.skillUrl+ `borrar/${id}`);
  }

}
