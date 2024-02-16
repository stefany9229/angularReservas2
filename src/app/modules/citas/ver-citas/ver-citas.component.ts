import { Component } from '@angular/core';
import { Cita } from 'src/app/models/mis-citas.model';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css']
})
export class VerCitasComponent {
  
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

  


