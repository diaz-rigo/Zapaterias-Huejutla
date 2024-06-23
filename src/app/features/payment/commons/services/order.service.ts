import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }


  updateOrderStatus(paypalOrderId: string, subscription: any) {
    const url = `${environment.api}/order/updateStatusOrder`; // Ruta a la que enviar la solicitud POST
    return this.http.post(url, { paypalOrderId, subscription });
  }

  enviarPedido(datosPedido: any): Observable<any> {
    const url =`${environment.api}/order/solicitarPedido`; // Ruta a la que enviar la solicitud POST
    return this.http.post<any>(url, datosPedido);
  }
  consultarPedido(code: string): Observable<any> {
    const url = `${environment.api}/publicR`;
    // Se pasan los parámetros de consulta utilizando la opción 'params' del objeto de opciones.
    return this.http.get<any>(url, { params: { code } });
  }

  getAllOrders(): Observable<any[]> {
    const url = `${environment.api}/admin/pedidos`; // Ruta para obtener todos los pedidos del administrador
    return this.http.get<any[]>(url);
  }
  getAllVentas(): Observable<any[]> {
    const url = `${environment.api}/admin/ventas`; // Ruta para obtener todos los pedidos del administrador
    return this.http.get<any[]>(url);
  }

  actualizarImagenPedido(pedidoId: string, formData: FormData): Observable<any> {
    // Realizar la solicitud HTTP PUT al backend para actualizar la imagen del pedido
    return this.http.put<any>(`${environment.api}/order/${pedidoId}/imagen`, formData);
  }
}
