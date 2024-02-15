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
    return this.http.get<any[]>('https://run.mocky.io/v3/bb2e560a-71d7-4e99-98f5-2d62d93e5c00')

}
}
