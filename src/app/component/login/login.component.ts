import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import { Posto } from '../../model/posto.model';
import { AuthService } from '../../service/auth.service';
import {TokenStorage} from '../../service/token.storage';
import { Login } from '../../model/login.model';
import { PostoService } from '../../service/posto.service';
import { UserStorage } from '../../service/user.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  loginDados: Login = new Login();
  usuarioLogado: string;

  constructor(private router: Router, private userStorage: UserStorage, 
                private authService: AuthService, private token: TokenStorage) {
  }

  login(): void {
    this.authService.attemptAuth(this.loginDados.username, this.loginDados.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.authService.buscarAutenticado(this.loginDados.username, 
          this.loginDados.password).subscribe(usuario => {
            this.userStorage.saveUser(usuario.username)
        })
        this.router.navigate(['lista-postos']);
      }
    );
  }

 

}
