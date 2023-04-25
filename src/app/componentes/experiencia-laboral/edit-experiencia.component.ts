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

  expLab: Experiencia 
  

  constructor(private experienciaService: ExperienciaService, private activatedRouter: ActivatedRoute, private router: Router/* , private formBuilder : FormBuilder */) {

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
  

   ///FUNCIONANDO -> ARREGLAR EN LOS DEMAS
   onUpdate() {
    //console.log("estoy en la funcion");
    const id = this.activatedRouter.snapshot.params['id'];
    //console.log("El id capturado es " + `${id}`);
    //if (id == this.id)
    this.experienciaService.save(this.expLab).subscribe(
      data => {
        //console.log("Ingreso en data añadir " + `${id}`);
        alert('Experiencia editada');
        this.router.navigate(['']);
      },
      err => {
        alert('Falló la edición');
        /* //this.router.navigate(['']); */
      }
    )
  }

}


