import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsService } from './shared/assignments.service';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application de gestion des assignments !!!';
  isLogged = this.authService.loggedIn;

  constructor(private authService:AuthService, private router:Router, private assignementService : AssignmentsService) {}

  login() {
    if(!this.authService.loggedIn) {
      this.authService.logIn();
      this.isLogged = this.authService.loggedIn;
      this.router.navigate(['/login']);
    } else {
      this.authService.logOut();
      this.router.navigate(['/home']);

    }
  }

  logout()  {
    this.authService.logOut();
    this.isLogged = this.authService.loggedIn;
    this.router.navigate(['/home']);
  }

  initialiserLaBaseAvecDonneesTests(){
    this.assignementService.peuplerBd();
    console.log("#### initialiserLaBaseAvecDonneesTests : DONNEES AJOUTES #####")
  }
}
