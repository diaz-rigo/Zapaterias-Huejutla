import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tipoUsuario!: string;



  constructor() { }
  login(email: string, password: string):void {
    if (email == "admin@gmail.com" && password == "123") {
      console.log("encontrado")
      this.tipoUsuario = "admin";
    }
  }


}
