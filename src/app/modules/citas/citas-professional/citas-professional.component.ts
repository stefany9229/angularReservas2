import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/models/mis-citas.model';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-citas-professional',
  templateUrl: './citas-professional.component.html',
  styleUrls: ['./citas-professional.component.css']
})
export class CitasProfessionalComponent {

    
  citas: Cita[] = [];
  selectedStatuses: { [citaId: number]: string } = {};

  constructor(
    private citasService: CitasService,private router: Router)
  {

  }
 
  ngOnInit(): void {
    this.obtenerCitas();
  }

  
  obtenerCitas(): void {
    this.citasService.getCitasProfessional().subscribe({
      next: (citas) => {
        this.citas = citas.sort((a, b) => new Date(b.finishTime).getTime() - new Date(a.finishTime).getTime());
        console.log('Citas recibidas:', this.citas); // Aquí verás la estructura de los datos en la consola
      },
      error: (error) => console.error('Error al obtener las citas:', error),
      // Puedes manejar la finalización si es necesario
    });
  }

  onStatusChange(cita: Cita, event: Event): void {
    const selectElement = event.target as HTMLSelectElement; // casting explícito
    const nuevoEstado = selectElement.value;
    //const updatedCita = { ...cita, status: nuevoEstado }
    
    this.actulizarStatus(nuevoEstado,cita.id)
    console.log("actulizó estado")
     // Actualiza el estado en el array de citas directamente
    const index = this.citas.findIndex(c => c.id === cita.id);
    if (index !== -1) {
      this.citas[index].status = nuevoEstado;
  }


    // ... tu código para manejar el cambio de estado ...
  }

  

 

    actulizarStatus(nuevoStatus : string,id: number) {
      
      this.citasService.updateAppointmentStatus(id, nuevoStatus).subscribe(
        response => {
          console.log('Status updated successfully', response);
        },
        error => {
          console.error('Error updating status', error);
        }
      );
  }
  
  
}
