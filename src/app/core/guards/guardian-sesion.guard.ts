import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardianSesionGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = localStorage.getItem('token'); // Asumiendo que el token se guarda con la clave 'token'
    
    if (token) {
      // Si el token existe en localStorage, permite la activación de la ruta
      return true;
    } else {
      // Si no hay token, redirige al usuario a la página de inicio de sesión y retorna false
      this.router.navigate(['/login']); // Asegúrate de actualizar '/login' con la ruta correcta a tu página de inicio de sesión
      return false;
    }
  }
}
