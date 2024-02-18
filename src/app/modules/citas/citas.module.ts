import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { VerCitasComponent } from './ver-citas/ver-citas.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { CitaCardComponent } from './cita-card/cita-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CitasProfessionalComponent } from './citas-professional/citas-professional.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VerCitasComponent,
    AgendarCitaComponent,
    CitaCardComponent,
    CitasProfessionalComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    VerCitasComponent,
    AgendarCitaComponent
  ]
})
export class CitasModule { }
