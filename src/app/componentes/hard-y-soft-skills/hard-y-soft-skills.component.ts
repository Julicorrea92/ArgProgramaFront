import { Component, OnInit } from '@angular/core';
import { hardSkill, softSkill } from 'src/app/model/skill';
import { SkillService, SkillService2 } from 'src/app/servicios/skill.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-hard-y-soft-skills',
  templateUrl: './hard-y-soft-skills.component.html',
  styleUrls: ['./hard-y-soft-skills.component.css']
})
export class HardYSoftSkillsComponent implements OnInit {

  hardSkill: hardSkill[] = [];
 // softSkill: softSkill[] = [];

  constructor(private skillService : SkillService, /* private skillService2: SkillService2 */ private tokenService: TokenService) { }

  isLogged= false;

  ngOnInit(): void {

    this.cargarSkills();
   // this.cargarSkills2();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged= false;
    }
  }

  

  cargarSkills():void{
    this.skillService.obtenerSkills().subscribe(
      data=>{
        this.hardSkill = data;
      }
    );
  }

  borrar(id: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data=> {
          this.cargarSkills();
        }, err => {
          alert('No se pudo cargar skill')
        }
      )
    }
  }



/*   cargarSkills2():void{
    this.skillService2.obtenerSkills2().subscribe(
      data=>{
        this.softSkill = data;
      }
    );
  }

  borrar2(id: number){
    if(id != undefined){
      this.skillService.delete(id).subscribe(
        data=> {
          this.cargarSkills();
        }, err => {
          alert('No se pudo cargar skill')
        }
      )
    }
  } */
}
