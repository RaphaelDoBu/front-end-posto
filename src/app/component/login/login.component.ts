import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  
  constructor(private Auth: AuthService) {
  }

  ngOnInit() {
  
  }

  loginUser(event){
    event.preventDefault()
    const target = event.target 
    const username = target.querySelector("#username").value;
    const password = target.querySelector("#password").value;

    this.Auth.getUserDetails(username, password);

    console.log(username, password)
  }
}
