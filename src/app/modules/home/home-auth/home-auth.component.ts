import { Component } from '@angular/core';

@Component({
  selector: 'app-home-auth',
  templateUrl: './home-auth.component.html',
  styleUrls: ['./home-auth.component.css']
})
export class HomeAuthComponent {

  usuario: any;

  ngOnInit() {
    // Obtener la cadena JSON del almacenamiento local
    const userJson = localStorage.getItem('user');

    // Convertir la cadena JSON a un objeto
    if (userJson) {
      this.usuario = JSON.parse(userJson);
    }

    // Ahora puedes usar los datos del usuario en tu plantilla/componente
  }

}
