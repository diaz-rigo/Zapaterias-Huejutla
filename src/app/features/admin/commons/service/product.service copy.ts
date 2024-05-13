// import { environment } from './../../../../../environments/environment';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// // import { ADMINServicesModule } from './services.module';
// // import { Observable, catchError, forkJoin, map, tap } from 'rxjs';
// // import { IproductResponse } from '../../interfaces/Product.interface';
// // import { environment } from 'src/environments/environment';
// // import { Product } from '../../models/Product.models';
// import { HttpHeaders } from '@angular/common/http';
// import { Observable, map } from 'rxjs';
// import { Product } from '../../models/Product.models';
// import { IproductResponse } from '../../interfaces/Product.interface';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   constructor(private http: HttpClient) {}

//   updateProductImage(
//     category: string,
//     productId: string,
//     position: number,
//     file: File
//   ): Observable<any> {
//     const formData: FormData = new FormData();
//     formData.append('position', position.toString());
//     formData.append('image', file);
//     // console.log('image', file);
//     const url = `${environment.api}/product/${category}/${productId}/image`;

//     return this.http.put(url, formData);
//   }



//   getAll(): Observable<Product[]> {
//     // debugger
//     return this.http.get<IproductResponse[]>(`${environment.api}/product`).pipe(
//       map((originResponse: IproductResponse[]) => {
//         return originResponse.map(
//           (item: IproductResponse) => new Product(item)
//         );
//       })
//     );
//   }

//   getById(id: string): Observable<IproductResponse> {
//     return this.http.get<IproductResponse>(`${environment.api}/product/${id}`);
//   }
//   // En el servicio de Angular
//   getProducts(
//     page: number,
//     limit: number,
//     filters: any
//   ): Observable<Product[]> {
//     const skip = page * limit; // Modificado para evitar problemas de paginación
//     const requestPayload = {
//       page,
//       limit,
//       filters,
//       sortOrder: 'DESC', // Cambiado a DESC para orden descendente
//     };

//     return this.http.post<Product[]>(
//       `${environment.api}/product/page/${limit}/${skip}`,
//       requestPayload
//     );
//   }

//   createProduct(product: Product): Observable<Product> {
//     return this.http.post<Product>(`${environment.api}/product`, product);
//   }

//   updateProduct(product: Product): Observable<Product> {
//     return this.http.put<Product>(
//       `${environment.api}/product/${product._id}`,
//       product
//     );
//   }

//   deleteProduct(id: string): Observable<{ id: string }> {
//     return this.http.delete<{ id: string }>(`${environment.api}/product/${id}`);
//   }

//   updateProductStatus(id: string, status: string): Observable<Product> {
//     const url = `${environment.api}/product/${id}/status`;
//     const body = { status }; // Puedes enviar otros datos si es necesario

//     return this.http.put<Product>(url, body);
//   }
//   deleteProductImage(productId: string, imageName: string): Observable<any> {
//     const url = `${environment.api}/product/${productId}/${imageName}`;
//     return this.http.delete(url);
//   }
// }
