export class Persona{
    
    id?: number;// Con el "?" me evito que me marque el error por no estar declarado en el constructor, ya que el id se genera automáticamente.
    nombre: string;
    apellido: string;
    rol: string;
    sobreMi: string;
    imgPerfil: string;
    

    constructor(nombre: string, apellido: string, rol: string, sobreMi: string, imgPerfil: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.rol = rol;
        this.sobreMi = sobreMi;
        this.imgPerfil = imgPerfil;

    }


}