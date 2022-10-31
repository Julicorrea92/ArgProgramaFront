import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/formacion-academica';
import { EducacionService } from 'src/app/servicios/formacion-academica.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {

  educacion: Educacion[]= [];
  constructor(private edService: EducacionService, private tokenService: TokenService, private router: Router) { }

  isLogged= false;

  ngOnInit(): void {
    this.cargarEducacion();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else {
      this.isLogged= false;
    }
  }

  cargarEducacion():void{
    this.edService.obtenerEducacion().subscribe(data=>{      
      this.educacion = data
    });
  }

  borrar(id?: number){
    if(id != undefined){
      this.edService.delete(id).subscribe(data =>
        {
          this.edService.delete(id).subscribe;
          
          alert('Educacion eliminada correctamente. Actualice la ver los cambios');

        }, err=> {
          alert('No se pudo borrar la educacion');
        })
    }
    
    
  }
}
