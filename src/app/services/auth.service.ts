import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = [
    
]

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(){
     return this.http.get('/assets/users.json')
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('home')
  }
}
