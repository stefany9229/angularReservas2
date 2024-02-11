import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
    signupForm: FormGroup;

    constructor(
      private _builder: FormBuilder
    ) {
      this.signupForm = this._builder.group({
        nombre: [''],
        usuario: ['', Validators.required],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        clave: ['', Validators.required]
      });    

    }

    enviar(values:any) {
      console.log(values)
    }

}
