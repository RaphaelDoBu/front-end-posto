import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostoService } from '../../service/posto.service';
import { Posto } from '../../model/posto.model';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../../service/auth.service';
import { UserStorage } from '../../service/user.storage';

@Component({
  selector: 'app-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.css']
})
export class PostoComponent implements OnInit {
  postos: Posto[];
  usuarioLog: String;

  constructor(private router: Router, private postoService: PostoService, 
              private userStorage: UserStorage) { }

  ngOnInit() {
    this.postoService.getAll().subscribe(data => {
      this.postos = data;
    });
  
    this.usuarioLog = this.userStorage.getUser();
    console.log(this.usuarioLog);
  }

  

}
