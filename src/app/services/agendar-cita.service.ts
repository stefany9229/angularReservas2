import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendarCitaService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  obtenerProfesionales(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`);
  }

  obtenerCitas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/appointment`);
  }

  crearCita(cita: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/appointment`, cita);
  }
}
