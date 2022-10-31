export class hardSkill {

    id?: number;
    nombreHard: string;
    porcentajeHard: number;

    constructor(nombreHard: string, porcentajeHard: number){
        this.nombreHard=nombreHard;
        this.porcentajeHard=porcentajeHard;
    }
}

export class softSkill {

    id?: number;
    nombreSoft: string;
    porcentajeSoft: number;

    constructor(nombreSoft: string, porcentajeSoft: number){
        this.nombreSoft=nombreSoft;
        this.porcentajeSoft=porcentajeSoft;
    }
}



