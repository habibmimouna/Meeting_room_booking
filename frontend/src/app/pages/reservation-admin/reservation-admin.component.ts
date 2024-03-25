import { Component } from '@angular/core';
import { ReservationTableComponent } from '../../component/reservation-table/reservation-table.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';

@Component({
  selector: 'app-reservation-admin',
  standalone: true,
  imports: [ReservationTableComponent,NavbarComponent],
  templateUrl: './reservation-admin.component.html',
  styleUrl: './reservation-admin.component.scss'
})
export class ReservationAdminComponent {

}
