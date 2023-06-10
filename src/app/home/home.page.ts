import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private dashboardService : DashboardService) {}

  consultaEstadoBaseDatos(){
    alert(this.dashboardService.consultaBaseDatos());
  }
}
