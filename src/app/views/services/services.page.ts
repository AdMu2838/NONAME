import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/FirebaseService';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  servicios: any[] = [];
  currentSegment = 'info';
  constructor(private firebaseService: FirebaseService,
    private navCtrl: NavController) {

  }
  segmentChanged(event: any) {
    this.currentSegment = event.detail.value;
  }
  editService(servicio: any) {
    this.navCtrl.navigateForward(`/edit-service?id=${servicio.id}`);
  }
  ngOnInit() {
    this.obtenerServicios();
  }
  obtenerServicios(){
    this.firebaseService.getCollectionData('Servicio').pipe().subscribe((servicios)=>{
      servicios.forEach((servicio: any)=>
        this.servicios.push({
          id:servicio.payload.doc.id,
          data: servicio.payload.doc.data()
        })
      );
    });
  }
  ionViewWillEnter() {
    // Reinicia la lista de servicios antes de cargarla nuevamente
    this.servicios = [];
    // Llama a la función para cargar la lista de servicios nuevamente
    this.obtenerServicios();
  }
}
