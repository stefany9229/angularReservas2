import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeNoAuthComponent } from './home-no-auth/home-no-auth.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { CitasModule } from '../citas/citas.module';


@NgModule({
  declarations: [
    HomeNoAuthComponent,
    HomeAuthComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CitasModule
  ],
  exports:[
    HomeAuthComponent,
    HomeNoAuthComponent
  ]
})
export class HomeModule { }
