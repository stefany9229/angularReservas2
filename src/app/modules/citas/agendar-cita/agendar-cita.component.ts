import { Component, OnInit } from '@angular/core';
import { AgendarCitaService } from 'src/app/services/agendar-cita.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent implements OnInit {
  profesionales: any[] = [];
  citasDisponibles: any[] = [];
  profesionalSeleccionado: string = '';
  displayedColumns: string[] = ['fechaInicio', 'fechaFin', 'confirmar'];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private agendarCitaService: AgendarCitaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.obtenerProfesionales();
  }

  obtenerProfesionales(): void {
    this.agendarCitaService.obtenerProfesionales().subscribe(data => {
      this.profesionales = data.filter((user: any) => user.roles.includes('PROFESSIONAL'));
      // Opcionalmente, selecciona un profesional por defecto o permite al usuario elegir
    });
  }

  seleccionarProfesional(email: string): void {
    this.profesionalSeleccionado = email;
    this.generarCitasDisponibles();
  }

  generarCitasDisponibles(): void {
    const inicioJornada = new Date();
    inicioJornada.setHours(7, 0, 0, 0); // Comienza a las 7 AM

    const finJornada = new Date();
    finJornada.setHours(17, 0, 0, 0); // Termina a las 5 PM

    this.citasDisponibles = [];

    let horaInicio = inicioJornada;
    while (horaInicio < finJornada) {
      const horaFin = new Date(horaInicio.getTime() + 30 * 60000); // Agrega 30 minutos

      this.citasDisponibles.push({
        inicio: this.toLocalISOString(horaInicio),
        fin: this.toLocalISOString(horaFin)
      });

      horaInicio = new Date(horaFin.getTime()); // Prepara la siguiente cita
    }

    this.dataSource.data = this.citasDisponibles;
  }

  private toLocalISOString(date: Date): string {
    const tzOffset = date.getTimezoneOffset() * 60000; // Ajuste por la diferencia horaria en milisegundos
    const localISOTime = new Date(date.getTime() - tzOffset).toISOString().slice(0, -1);
    return localISOTime;
  }

  agendarCita(cita: any): void {
    const citaParaAgendar = {
      professionalEmail: this.profesionalSeleccionado,
      startTime: cita.inicio,
      finishTime: cita.fin
    };
  
    this.agendarCitaService.crearCita(citaParaAgendar).subscribe({
      next: (respuesta) => {
        console.log('Cita agendada con éxito:', respuesta);
        // Mostrar un mensaje de éxito
        this.snackBar.open('Cita agendada con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snack-success']
        });
        // Redirigir al usuario
        this.router.navigate(['/home/mis-citas']); // Actualiza con la ruta deseada
      },
      error: (error) => {
        console.error('Error al agendar la cita:', error);
        // Mostrar un mensaje de error
        this.snackBar.open('Error al agendar la cita', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snack-error']
        });
      }
    });
  }
  
  
}
