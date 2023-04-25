import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/formacion-academica';
import { EducacionService } from 'src/app/servicios/formacion-academica.service';

@Component({
  selector: 'app-new-formacion',
  templateUrl: './new-formacion.component.html',
  styleUrls: ['./new-formacion.component.css']
})
export class NewFormacionComponent implements OnInit {

  cursos: string;
  carreraDeGrado: string;
  educacionSecundaria: string;

  constructor(private edService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate():void{

    const eduacion = new Educacion(this.cursos, this.carreraDeGrado, this.educacionSecundaria);
    this.edService.save(eduacion).subscribe(
      data=>{
        alert('Educacion creada correctamente');
        this.router.navigate(['']);
        
      }, err =>{
        alert('Fallo la creación de educación');
        this.router.navigate(['']);

      }
    )
  }
}
