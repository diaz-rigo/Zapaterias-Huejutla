import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storage.service';
import { Iuser } from '../../shared/interfaces/user.interface';
// import { Iuser } from 'src/app/shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private helper = new JwtHelperService();

  get token(){
    return this.storageService.getToken()
  }
  constructor(private storageService: StorageService) {}

  getUserData(): Iuser | undefined {
    const decodedData = this.helper.decodeToken(this.token);
    return decodedData;
  }

  getRol(): string {
    const userData = this.getUserData();
    // console.log(userData)
    return userData ? userData.rol : 'invitado';
  }

  isAutenticated(): boolean {
    // debugger
    return !!this.token && !this.isTokenExpired();
  }
  isTokenExpired(): boolean{
    return this.helper.isTokenExpired(this.token)
  }

  // Método para eliminar el token de autenticación del almacenamiento local
  removeToken(): void {
    localStorage.removeItem('token');
  }
}
