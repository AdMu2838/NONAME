import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private firebaseService : FirebaseService) {}

  //Consulta a base de Datos FIREBASE
  consultaBaseDatos() : string {
    return "Hola mundo"
  }
}
