import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  
  registrarUsuario(datosUsuario: any): Observable<any> {
    const url = 'http://localhost:8080/api/v1/auth/register';
    return this.http.post(url, datosUsuario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  // Asegúrate de esperar una respuesta como texto.
    }).pipe(
      map(response => {
        try {
          // Intenta convertir la respuesta de texto a un objeto JSON
          return JSON.parse(response);
        } catch (e) {
          // Si la respuesta no es un JSON válido, captura el error y maneja la cadena de texto
          console.error('Error parsing response as JSON', e);
          return response;  // Puedes elegir devolver la respuesta en bruto o manejar el error como prefieras
        }
      }),
      catchError(error => {
        // Manejo de errores HTTP o de red
        console.error('Error making HTTP request', error);
        return throwError(error);  // Retorna un Observable con un error
      })
    );
  }

  autenticarUsuario(datosUsuario: any): Observable<any> {
    const urlAunteticar = 'http://localhost:8080/api/v1/auth/authenticate';
    return this.http.post(urlAunteticar, datosUsuario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'  
    }).pipe(
      map(response => {
        try {
         
          return JSON.parse(response);
        } catch (e) {
          
          console.error('Error parsing response as JSON', e);
          return response;  //
        }
      }),
      catchError(error => {
        
        console.error('Error making HTTP request', error);
        return throwError(error); 
      })
    );
  }
    
}
