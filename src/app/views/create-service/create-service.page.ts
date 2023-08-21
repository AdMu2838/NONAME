import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/FirebaseService';
@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.page.html',
  styleUrls: ['./create-service.page.scss'],
})
export class CreateServicePage implements OnInit {
  newService: any ={
    nombre:'',
    capacidad: null,
    urlLogo:'',
  };
  constructor(private firebaseService: FirebaseService,
    private toastController: ToastController,
    private navCtrl: NavController) { }

  createService(){
    if(this.newService.nombre.trim()!=='' && this.newService.capacidad!==null
       && this.newService.urlLogo.trim()!==''){

      this.firebaseService.createDocument('Servicio',this.newService).then(()=>{
        console.log('Documento creado exitosamente');
        this.presentToast('Servicio Agregado');
        this.cleanForm();
        this.navCtrl.navigateForward('/services');
      }).catch((error)=>{
        console.error('Error al crear el documento', error);
      });
    }else{
      this.presentToast('Error al agregar servicio');
    }

  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'middle',
    });

    await toast.present();
  }
  cleanForm(){
    this.newService.nombre='';
    this.newService.capacidad=null;
    this.newService.urlLogo='';
  }
  ngOnInit() {
  }

}
