import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import { IProduct } from '../../interfaces/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Método para crear un nuevo producto
  createProduct(product: any): Observable<any> {
    return this.http.post<any>(`${environment.api}/product`, product);
  }
  // Método para subir imágenes
  uploadImages(files: File[]): Observable<string[]> {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append('images', file, `image-${index}-${file.name}`);
    });

    return this.http.post<string[]>(`${environment.api}/product/upload-images`, formData);
  }
  
  // Método para subir texturas
  uploadTexture(textures: File[]): Observable<string[]> {
    const formData = new FormData();
    textures.forEach((texture, index) => {
      formData.append('textures', texture, `texture-${index}-${texture.name}`);
    });

    return this.http.post<string[]>(`${environment.api}/product/upload-textures`, formData);
  }
  // Método para subir archivos (imágenes o texturas)
  uploadFiles(files: File[], endpoint: string): Observable<string[]> {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append('files', file, `${endpoint}-${index}-${file.name}`);
    });

    return this.http.post<string[]>(`${environment.api}/product/${endpoint}`, formData);
  }

  // Método para actualizar las imágenes de un producto
  updateProductImages(productId: string, images: string[]): Observable<any> {
    return this.http.put<any>(`${environment.api}/product/${productId}/images`, { images });
  }

  // Método para obtener todos los productos
  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${environment.api}/product`);
  }

  // Método para actualizar un producto existente
  updateProduct(productId: string, product: any): Observable<any> {
    return this.http.put<any>(`${environment.api}/product/${productId}`, product);
  }

  // Método para eliminar un producto
  deleteProduct(productId: string): Observable<any> {
    return this.http.delete<any>(`${environment.api}/product/${productId}`);
  }

  // Método para obtener un producto por su ID
  getById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.api}/product/${id}`);
  }
}
