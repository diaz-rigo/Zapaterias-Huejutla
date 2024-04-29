  import { Injectable } from '@angular/core';
  import { AuthServicesModule } from './services.module';
  import { HttpClient } from '@angular/common/http';
  import { ISingInRequest } from '../../interfaces/sign-in-request.interface';
  import { Observable } from 'rxjs';
  // import { IToken } from 'src/app/shared/interfaces/token.interface';
import { environment } from '../../../../../environments/environment.prod';
import { IToken } from '../../../../shared/interfaces/token.interface';
// import { IToken } from '../../../../shared/interfaces/token.interface';

  @Injectable({
    providedIn: AuthServicesModule
  })
  export class SignInService {

    constructor(
      private http:HttpClient
    ) { }

    signIn(request:ISingInRequest): Observable<IToken>{
      // debugger
      return this.http.post<IToken>(`${environment.api}/auth/sign-in`, request)
    }
  }
