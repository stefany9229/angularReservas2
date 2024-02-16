import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.css']
})
export class HomeAuthComponent {

  usuario?: User;

  constructor(private router: Router) {}

  

  ngOnInit() {
    // Obtener la cadena JSON del almacenamiento local
    const userJson = localStorage.getItem('user');

    // Convertir la cadena JSON a un objeto
    if (userJson) {
      this.usuario = JSON.parse(userJson);
    }

    // Ahora puedes usar los datos del usuario en tu plantilla/componente
  }

  hasClientRole(): boolean {
    if(this.usuario?.roles.includes('CLIENT')){
      return true;
    }else{
      return false;
    }
    
    
  }
  hasProfessionaltRole(): boolean {
    if(this.usuario?.roles.includes('PROFESSIONAL')){
      return true;
    }else{
      return false;
    }
    
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token') // Elimina el usuario del localStorage
    this.router.navigate(['/']); // Redirige al usuario a la ruta raíz
  }







}
