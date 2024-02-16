import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Comprobar si la petición debe ser interceptada
    if (!this.shouldExclude(request)) {
      try {
        const token = localStorage.getItem('token');
        // Clonar la petición para agregar el token de autenticación y otros headers
        const newRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
            
          }
        });
        return next.handle(newRequest);
      } catch (e) {
        // Manejar el error como veas necesario
        console.log('🔴🔴🔴 Ojito error', e);
      }
    }
    // Si la petición está excluida, continuar sin modificarla
    return next.handle(request);
  }

  private shouldExclude(request: HttpRequest<unknown>): boolean {
    // Definir las rutas que quieres excluir
    const excludeRoutes = [
      'http://localhost:8080/api/v1/auth/register',
      'http://localhost:8080/api/v1/auth/authenticate'
    ];
    // Comprobar si la URL de la petición coincide con alguna de las rutas excluidas
    return excludeRoutes.some(url => request.url.startsWith(url));
  }

  }

