import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchQuery = new Subject<string>();

  searchQuery$ = this.searchQuery.asObservable();





  constructor(private http: HttpClient) {

  }

  setSearchQuery(query: string) {
    this.searchQuery.next(query);
  }

  // !En proceso de componente de busqueda
  searchAnythingHome(query: string): Observable<any> {
    return this.http.get<any>(`${environment.api}/product/search?q=${query}`).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error); // Reenviar el error para que lo maneje el componente
      })
    );
  }
  
  // !En proceso de componente de busqueda
  getAllProduct(): Observable<any> {
    return this.http.get<any>(`${environment.api}/product/`).pipe(
      catchError(error => {
        console.error('Error en la solicitud:', error);
        return throwError(error); // Reenviar el error para que lo maneje el componente
      })
    );
  }









  
}
