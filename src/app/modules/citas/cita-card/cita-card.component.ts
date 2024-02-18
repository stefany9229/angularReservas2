import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cita } from 'src/app/models/mis-citas.model';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-cita-card',
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.css']
})
export class CitaCardComponent {
  @Input() cita?: Cita;
  @Output() citaCancelada: EventEmitter<void> = new EventEmitter<void>();

  constructor(private citasService: CitasService, private snackBar: MatSnackBar) {}

  cancelarCita(): void {
    if (this.cita) {
      this.citasService.borrarCita(this.cita.id).subscribe(
        () => {
          console.log('Cita cancelada con éxito');
          this.mostrarSnackbar('Cita cancelada exitosamente', 'success');
          this.citaCancelada.emit(); // Emitir evento para indicar que la cita ha sido cancelada
        },
        error => {
          console.error('Error al cancelar cita:', error);
          this.mostrarSnackbar('Error al cancelar cita', 'error');
        }
      );
    }
  }

  mostrarSnackbar(mensaje: string, tipo: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [tipo === 'success' ? 'snack-success' : 'snack-error']
    });
  }
}

