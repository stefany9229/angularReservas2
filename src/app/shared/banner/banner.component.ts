import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  ngOnInit(): void {
    this.imprimirusuario()
  }
  @Input()usuario?:User;


  
  imprimirusuario(){
    console.log(this.usuario);
  }

}
