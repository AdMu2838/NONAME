export class Servicio {
    nombre: string;

    constructor(nombre:string) {
      this.nombre = nombre;
    }
  
    toString() {
        return this.nombre;
    }
}