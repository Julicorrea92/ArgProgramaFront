export class Educacion {

    id?: number;
    cursos: string;
    carreraDeGrado: string;
    educacionSecundaria: string;

    constructor(cursos: string, carreraDeGrado: string, educacionSecundaria: string) {

        this.cursos = cursos;
        this.carreraDeGrado = carreraDeGrado;
        this.educacionSecundaria = educacionSecundaria;
    }

}
