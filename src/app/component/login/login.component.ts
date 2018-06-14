import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { Posto } from '../../model/posto.model';
import { AuthService } from '../../service/auth.service';
import {TokenStorage} from '../../service/token.storage';
import { Login } from '../../model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  loginDados: Login = new Login();

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage) {
  }

  login(): void {
    this.authService.attemptAuth(this.loginDados.username, this.loginDados.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['lista-postos']);
      }
    );
  }
}
