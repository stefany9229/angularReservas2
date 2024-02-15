import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitasService } from 'src/app/services/citas.service';
import { Cita } from 'src/app/models/mis-citas.model';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {

  citas: Cita[] = [];

  constructor(
    private citasService: CitasService
  ){

  }
 
  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(): void {
    this.citasService.getCitas().subscribe({
      next: (citas) => {
        this.citas = citas;
        console.log('Citas recibidas:', this.citas); // Aquí verás la estructura de los datos en la consola
      },
      error: (error) => console.error('Error al obtener las citas:', error),
      // Puedes manejar la finalización si es necesario
    });
  }

}
