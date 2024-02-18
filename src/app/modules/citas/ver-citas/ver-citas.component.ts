import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    private citasService: CitasService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(): void {
    this.citasService.getCitas().subscribe({
      next: (citas) => {
        this.citas = citas;
        console.log('Citas recibidas:', this.citas);
      },
      error: (error) => console.error('Error al obtener las citas:', error),
    });
  }

  cancelarCita(id: number): void {
    this.citasService.borrarCita(id).subscribe(
      () => {
        console.log('Cita cancelada con éxito');
        this.mostrarSnackbar('Cita cancelada exitosamente', 'success');
        // Actualizar la lista de citas después de la cancelación
        this.obtenerCitas();
      },
      error => {
        console.error('Error al cancelar cita:', error);
        this.mostrarSnackbar('Error al cancelar cita', 'error');
      }
    );
  }
  
  mostrarSnackbar(mensaje: string, tipo: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [tipo === 'success' ? 'snack-success' : 'snack-error']
    });
  }

  redirigirAReservar() {
    // Redirigir al componente o ruta donde se puede realizar la reserva
    this.router.navigateByUrl('/home/agendar-citas');
  }

  onCitaCancelada(): void {
    // Actualizar la lista de citas después de cancelar una cita
    this.obtenerCitas();
  }

  eliminar(cita:any){
    let id =cita.id;
    this.citasService.borrarCita(id).subscribe({
      next: (response) => {
        console.log('Appointment deleted successfully', response);
        this.obtenerCitas()
      },
      error: (e) => {
        console.error('There was an error!', e);
      }
    });
}
}