import { Injectable } from '@angular/core';
import { FirebaseService } from './FirebaseService';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private firebaseService: FirebaseService) { }

  //OBtiene la promesa y convierte a lista
  async obtenerDatosPruebaBD() : Promise<any[]>{
    let items = [];
    const respuesta = await this.firebaseService.getDataPrueba();
    respuesta.forEach(item => {
      items.push(item.payload.doc.data())
    })
    return items;
  }

}
