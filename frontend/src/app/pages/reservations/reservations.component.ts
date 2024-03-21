import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss'
})
export class ReservationsComponent {

}
