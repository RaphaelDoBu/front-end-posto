import { Injectable } from '@angular/core';


const USER = 'userLog';

@Injectable()
export class UserStorage {

  constructor() { }
  
  signOut() {
    window.sessionStorage.removeItem(USER);
    window.sessionStorage.clear();
  }

  public saveUser(user: string) {
      console.log(user)
    window.sessionStorage.removeItem(USER);
    window.sessionStorage.setItem(USER,  user);
  }

  public getUser(): string {
    return sessionStorage.getItem(USER);
  }
}