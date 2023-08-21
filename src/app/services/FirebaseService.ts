import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
      .toPromise();
  }

  getCollectionData(collectionName: string){
    return this.angularFirestore.collection(collectionName).snapshotChanges();
  }

  createDocument(collection: string, datos: any){
    const refCollection =  this.angularFirestore.collection(collection);
    return refCollection.add(datos);
  }

  updateDocument(collection: string,id: string, datos: any): Promise<void>{
    const refCollection = this.angularFirestore.collection(collection).doc(id);
    return refCollection.update(datos);
  }

  documentById(collection: string,id: any): Observable<any>{
    const refCollection = this.angularFirestore.collection(collection).doc(id);
    return refCollection.valueChanges();
  }
}


