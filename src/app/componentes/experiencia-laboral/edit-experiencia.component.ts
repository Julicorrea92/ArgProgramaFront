import { Expression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {
  //experienciaList: Experiencia[] = [];

  expLab: Experiencia = null;
  //experienciaForm: FormGroup;

  /* id: string = ''
  puesto: string = '';
  empresa: string = '';
  periodo: string = '';
  lugar: string = '';
  tareas: string = '';
  imgDes: string = ''; */

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router/* , private formBuilder : FormBuilder */) {


    /*  this.experienciaForm=this.formBuilder.group({
       id:[''],
       empresa: ['', [Validators.required]],
       periodo: ['', [Validators.required]],
       lugar: ['', [Validators.required]],
       tareas: ['', [Validators.required]],
       imgDes: ['', [Validators.required]]
 
     }) */
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.detalle(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert('Error 1 al modificar experiencia');
        this.router.navigate(['']);
      }
    )
  }

  //Hay algo que no deja entrar a la funcion onUpdate. 
  //Va directo al error. Averiguar como solucionarlo.

  onUpdate(): void {
    console.log("estoy en la funcion");

    const id = this.activatedRouter.snapshot.params['id'];
    console.log("El id capturado es " + `${id}`);
    //if (id == this.id)
    this.experienciaService.editar(id, this.expLab).subscribe(
      data => {

          alert('Experiencia añadida');
          this.router.navigate(['']);
        },
        err => {
          alert('Falló la creación');
          this.router.navigate(['']);
        }
      )
  }


}

/* let experiencia:Experiencia = this.experienciaList[id];
this.loadForm(experiencia); */

/* private loadForm(experiencia : Experiencia){
  this.experienciaForm.setValue({
    id: experiencia.id,
    empresa: experiencia.empresa,
    periodo: experiencia.periodo,
    lugar: experiencia.lugar,
    tareas: experiencia.tareas,
    imgDes: experiencia.imgDes
  })
} */

