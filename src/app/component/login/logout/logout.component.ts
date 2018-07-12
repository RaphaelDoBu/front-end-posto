import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorage } from '../../../service/user.storage';
import { TokenStorage } from '../../../service/token.storage';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {


  constructor(private router: Router, private userStorage: UserStorage, 
                 private token: TokenStorage) { }

  logout(): void {
    this.token.signOut();
    this.userStorage.signOut();
    this.router.navigate(['login']);
  }

  ngOnInit() {
  }

}
