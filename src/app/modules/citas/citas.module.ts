import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';


@NgModule({
  declarations: [
    VerCitasComponent,
    AgendarCitaComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule
  ],
  exports:[
    VerCitasComponent,
    AgendarCitaComponent
  ]
})
export class CitasModule { }
