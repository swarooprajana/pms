import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PmsService {
  private loggedInKey = 'isLoggedIn';
  constructor() { }
  setLoggedIn(value: boolean) {
    sessionStorage.setItem(this.loggedInKey, value ? 'true' : 'false');
    }

    isLoggedIn(): boolean {
    return sessionStorage.getItem(this.loggedInKey) === 'true';
    }
}
