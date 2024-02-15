import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private _builder: FormBuilder,private userService: UserServiceService,private router: Router
  ) {
    this.loginForm = this._builder.group({
      
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    });    

  }

  trasnformarValores(valoresFormulario: any) {
    return  {
     
      email: valoresFormulario.email,
      password: valoresFormulario.clave,
      
    }
  }
  enviar(values:any) {
    console.log(this.trasnformarValores(values))
    this.userService.autenticarUsuario(this.trasnformarValores(values)).subscribe(
      (response) => {
        console.log('Usuario autenticado con éxito', response);
        // Si response contiene un token, guárdalo
        if (response.token) {
          localStorage.setItem('token', response.token);
          const userJson = JSON.stringify(response.user);
          localStorage.setItem('user', userJson);
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.error(error); // Aquí manejarías cualquier error que ocurra
      }

    )
  }



}
