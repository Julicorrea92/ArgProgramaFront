import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { hardSkill } from 'src/app/model/skill';
import { SkillService} from 'src/app/servicios/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  nombre:string;
  porcentaje:number;

  constructor(private skillService: SkillService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
      const skill= new hardSkill(this.nombre, this.porcentaje);
    this.skillService.nuevo(skill).subscribe(
      data=>{
        alert('Skill creada correctamente');
        this.router.navigate(['']);
      
      }, err=>{
        alert('Fallo la creación')
        this.router.navigate(['']);
      })
    }

  }


