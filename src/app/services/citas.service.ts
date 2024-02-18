import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../models/mis-citas.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private baseUrl = 'http://localhost:8080/api/v1/appointment';

  constructor(private http: HttpClient) { }

  public getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>('http://localhost:8080/api/v1/appointment/byUser');
  }

  
  borrarCita(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { responseType: 'text' });
  }

  updateAppointmentStatus(appointmentId: number, status: string) {
    const url = `http://localhost:8080/api/v1/appointment/status/${appointmentId}`;
    return this.http.put(url, status, { responseType: 'text' });
  }

  public getCitasProfessional(): Observable<Cita[]> {
    return this.http.get<Cita[]>('http://localhost:8080/api/v1/appointment/byEmployee')

  }
  
  
}
