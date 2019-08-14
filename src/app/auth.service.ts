import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registrerURL = 'http://localhost:4000/api/register';
  private _loginurl = 'http://localhost:4000/api/login';

  constructor(private http: HttpClient,
    private router: Router) {


  }
  registerUser(user) {
    return this.http.post<any>(this._registrerURL, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginurl, user);
  }

  loggein() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    if (confirm("¿Esta seguro de cerrar sesion?")) {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }
  }
}
