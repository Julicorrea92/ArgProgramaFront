import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  puesto: string = '';
  empresa: string = '';
  periodo: string = '';
  lugar: string = '';
  tareas: string = '';
  imgDes:  string = '';

  constructor(private experienciaService: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{

    const expe= new Experiencia(this.puesto, this.empresa, this.periodo, this.lugar, this.tareas, this.imgDes);
    this.experienciaService.save(expe).subscribe(
      data => {
      alert('Experiencia añadida');
      this.router.navigate(['']);
    },    
    err =>{
      alert('Falló la creación');
      this.router.navigate(['']);
    }
    )
  }

  
}
