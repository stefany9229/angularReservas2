import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    signupForm: FormGroup;

    constructor(
      private _builder: FormBuilder,private userService: UserServiceService,private router: Router
    ) {
      this.signupForm = this._builder.group({
        nombre: ['',Validators.required],
        apellidos: ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        clave: ['', Validators.compose([Validators.required, Validators.maxLength(8)])]
      });    

    }

    

    

    trasnformarValores(valoresFormulario: any) {
      return  {
        firstName: valoresFormulario.nombre,
        lastName: valoresFormulario.apellidos,
        email: valoresFormulario.email,
        password: valoresFormulario.clave,
        roles: ['CLIENT'] // Asume roles estáticos, ajusta según sea necesario
      }
    }
    enviar(values:any) {
      console.log(this.trasnformarValores(values))
      this.userService.registrarUsuario(this.trasnformarValores(values)).subscribe(
        (response) => {
          console.log('Usuario registrado con éxito', response);
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
