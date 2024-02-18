import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuthComponent } from './modules/home/home-auth/home-auth.component';
import { HomeNoAuthComponent } from '../app/modules/home/home-no-auth/home-no-auth.component';
import { GuardianSesionGuard } from './core/guards/guardian-sesion.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeNoAuthComponent
  },

  {
    path: 'home',
    component: HomeAuthComponent, canActivate: [GuardianSesionGuard]
  }
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
