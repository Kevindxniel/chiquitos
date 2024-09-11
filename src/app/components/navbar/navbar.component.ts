import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor( private userService: UsersService, private router: Router) { }

  isLogged(): boolean{
    return this.userService.getCurrentUser()!=null;
  }


  onClickLogout(): void {
    this.userService.logout()
    .then((response) => {
      console.log(response);
      this.router.navigate(['/']);
    })
    .catch(error => console.log(error));
  }

}
