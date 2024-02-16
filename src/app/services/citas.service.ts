import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../models/mis-citas.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  constructor(private http: HttpClient) { }

  public getCitas(): Observable<Cita[]> {
    return this.http.get<any[]>('http://localhost:8080/api/v1/appointment/byUser')

}
}
