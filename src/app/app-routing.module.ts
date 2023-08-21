import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'services',
    loadChildren: () => import('./views/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'create-service',
    loadChildren: () => import('./views/create-service/create-service.module').then( m => m.CreateServicePageModule)
  },
  {
    path: 'edit-service',
    loadChildren: () => import('./views/edit-service/edit-service.module').then( m => m.EditServicePageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
