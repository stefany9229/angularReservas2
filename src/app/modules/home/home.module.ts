import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeNoAuthComponent } from './home-no-auth/home-no-auth.component';
import { HomeAuthComponent } from './home-auth/home-auth.component';
import { CitasModule } from '../citas/citas.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeNoAuthComponent,
    HomeAuthComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CitasModule,
    SharedModule
  ],
  exports:[
    HomeAuthComponent,
    HomeNoAuthComponent
  ]
})
export class HomeModule { }
