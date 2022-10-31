import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/formacion-academica';
import { EducacionService } from 'src/app/servicios/formacion-academica.service';

@Component({
  selector: 'app-edit-formacion',
  templateUrl: './edit-formacion.component.html',
  styleUrls: ['./edit-formacion.component.css']
})
export class EditFormacionComponent implements OnInit {

  educacion: Educacion =null;

  constructor(private edService: EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.edService.detalle(id).subscribe(
      data=>{
        this.educacion = data;
      }, err=>{
        alert('Error al modificar');
        this.router.navigate(['']);
      }
    )
  }
//Al igual que en experiencia, hay algo que no deja entrar a la funcion onUpdate. 
//Va directo al error. Averiguar como solucionarlo 


  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.edService.update(id, this.educacion).subscribe(
      data=>{
        this.router.navigate(['']);
      }, err =>{
        alert('Error al modificar la educación');
        this.router.navigate(['']);
      }
    )

  }

}
