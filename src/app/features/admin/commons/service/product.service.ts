import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IproductResponse } from '../../interfaces/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Método para crear un nuevo producto
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/product`, product);
  }
  uploadImages(images: File[]): Observable<string[]> {
    const formData = new FormData();
    images.forEach((image) => {
      formData.append('images', image);
    });
    return this.http.post<string[]>(`${environment.api}/product/upload-images`, formData);
  }

  updateProductImages(productId: string, images: string[]): Observable<any> {
    return this.http.put<any>(`${environment.api}/product/${productId}/images`, { images });
  }
    // Método para obtener todos los productos
    getAllProducts(): Observable<IproductResponse[]> {
      return this.http.get<IproductResponse[]>(`${environment.api}/product`);
    }



    // Método para actualizar un producto existente
    updateProduct(productId: string, product: any): Observable<any> {
      return this.http.put<any>(`${environment.api}/product/${productId}`, product);
    }
    deleteProduct(productId: string): Observable<any> {
      return this.http.delete<any>(`${environment.api}/product/${productId}`);
    }
    getById(id: string): Observable<IproductResponse> {
      return this.http.get<IproductResponse>(`${environment.api}/product/${id}`);
    }
}
