import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() usuario?: User;

  constructor(private userService: UserServiceService, private router: Router) {}
  ngOnInit(): void {
  }

  cerrarSesionUsuario() {
    this.userService.cerrarSesion();
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }
}
