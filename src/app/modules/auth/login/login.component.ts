import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupForm: FormGroup;

  constructor(
    private _builder: FormBuilder
  ) {
    this.signupForm = this._builder.group({
      
      email: ['', Validators.compose([Validators.email, Validators.required])],
      clave: ['', Validators.required]
    });    

  }

  enviar(values:any) {
    console.log(values)
  }


}
