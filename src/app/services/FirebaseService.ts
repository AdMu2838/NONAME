import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  constructor(private angularFirestore: AngularFirestore) { }

  //Consulta a Firebase y retorna promesa
  async getDataPrueba() {
      return await this.angularFirestore
      .collection(environment.collecion_test)
      .snapshotChanges()
      .pipe(take(1))
      .toPromise()
  }
}



