import { Component, Input } from '@angular/core';
import { Cita } from 'src/app/models/mis-citas.model';

@Component({
  selector: 'app-cita-card',
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.css']
})
export class CitaCardComponent {
  @Input() cita?: Cita;

}
