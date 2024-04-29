import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, forkJoin, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
// import { Token } from '@angular/compiler';
import { ItokenResponse } from '../interfaces/apikey.interface';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private http:HttpClient) { }

  getAll():Observable<Token[]>
  {
    // debugger
    return this.http.get<ItokenResponse[]>(`${environment.api}/token`)
    .pipe(
      map(
        (originResponse:ItokenResponse[])=>{
          return originResponse.map((item:ItokenResponse)=>
            new Token(item)
          )
        }
      )
    )
  }
}
