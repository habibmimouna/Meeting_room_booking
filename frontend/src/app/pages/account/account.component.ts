import { Component } from '@angular/core';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { UserService } from '../../models/services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-account',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  user: User = {
    id: 0,
    fullName: '',
    email: '',
    password: '',
    phone: '',
    username: '',
    isAdmin: false,
  };

  constructor(private userService: UserService) {}

  getUserFromLocalStorage(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const userObject: User = JSON.parse(currentUser);
        this.user = userObject;
      } catch (error) {
        console.error('Error parsing currentUser JSON:', error);
      }
    } else {
      console.error('No currentUser found in localStorage.');
    }
  }

  

  ngOnInit(): void {
    this.getUserFromLocalStorage();
   
  }
}