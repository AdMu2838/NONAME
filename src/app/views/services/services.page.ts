import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/FirebaseService';
@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  servicios: any[] = [];
  currentSegment = 'info';
  constructor(private firebaseService: FirebaseService) {
    this.firebaseService.getCollectionData('Servicio').subscribe((data: any)=>{
      this.servicios=data;
    });
  }
  segmentChanged(event: any) {
    this.currentSegment = event.detail.value;
  }

  ngOnInit() {
  }

}
