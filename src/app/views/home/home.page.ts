import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  //Las llamadas a firebase son asincronas y se forma una cadena
  async obtenerDatosPrueba() {
    alert(JSON.stringify(await this.dashboardService.obtenerDatosPruebaBD()));
  }
}
