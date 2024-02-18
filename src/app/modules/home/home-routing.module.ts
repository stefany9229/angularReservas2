import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { AgendarCitaComponent } from '../citas/agendar-cita/agendar-cita.component';
import { VerCitasComponent } from '../citas/ver-citas/ver-citas.component';
import { HomeNoAuthComponent } from './home-no-auth/home-no-auth.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { GuardianSesionGuard } from 'src/app/core/guards/guardian-sesion.guard';
import { CitasProfessionalComponent } from '../citas/citas-professional/citas-professional.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeAuthComponent,
    children: [
      {
        path: 'agendar-citas',
        component: AgendarCitaComponent, canActivate:[GuardianSesionGuard]
      },
    
      {
        path: 'mis-citas',
        component: VerCitasComponent, canActivate:[GuardianSesionGuard]
      },
      {
        path: 'gestionar-citas',
        component: CitasProfessionalComponent,canActivate:[GuardianSesionGuard]
      }
    ]
    
  },
  {
    path: '',
    component: HomeNoAuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
    
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
    
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
