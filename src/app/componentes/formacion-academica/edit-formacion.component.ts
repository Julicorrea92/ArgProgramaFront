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

  educacion: Educacion;

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

///FUNCIONANDO -> ARREGLAR EN LOS DEMAS!
 onUpdate() {
  //console.log("estoy en la funcion");
  const id = this.activatedRouter.snapshot.params['id'];
  //console.log("El id capturado es " + `${id}`);
  //if (id == this.id)
  this.edService.save(this.educacion).subscribe(
    data => {
      //console.log("Ingreso en data añadir " + `${id}`);
      alert('Educación editada');
      this.router.navigate(['']);
    },
    err => {
      alert('Falló la edición');
      /* //this.router.navigate(['']); */
    }
  )
}

}