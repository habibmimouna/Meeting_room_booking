import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './dash.component.html',
  styleUrl: './dash.component.scss'
})
export class DashComponent {

}
