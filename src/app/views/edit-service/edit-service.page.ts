import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/FirebaseService';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.page.html',
  styleUrls: ['./edit-service.page.scss'],
})
export class EditServicePage implements OnInit {
  serviceEdit: any= {
  };
  serviceId: any;
  constructor(private route: ActivatedRoute,
    private navCtrl: NavController,
    private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.serviceId = this.route.snapshot.queryParamMap.get('id');
    if (this.serviceId) {
      this.firebaseService.documentById('Servicio', this.serviceId).subscribe(
        (servicio) => {
          if (servicio) {
            this.serviceEdit = servicio; // Asignar detalles del servicio
          } else {
            console.error('Servicio no encontrado.');
            console.log(this.serviceId);
          }
        },
        (error) => {
          console.error('Error al obtener el servicio:', error);
        }
      );
    } else {
      console.error('ID de servicio no válido.');
    }
  }

  updateService(){
    this.firebaseService.updateDocument('Servicio', this.serviceId, this.serviceEdit)
    .then(()=>{
      console.log('Servicio editado correctamente');
      this.navCtrl.navigateForward('/services');
    }).catch((error)=>{
      console.log('Servicio no actualizado',error);
    });
  }
}
