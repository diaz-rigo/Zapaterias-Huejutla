// import { Component } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core'
import { ConfirmationService, MessageService } from 'primeng/api'
import { DialogService } from 'primeng/dynamicdialog'
import { catchError, throwError } from 'rxjs'
// import { PedidoviewService } from '../../../../../shared/services/pedidoview.service';
import { NgxUiLoaderService } from 'ngx-ui-loader'
import { Router } from '@angular/router'

interface PasteleriaFlavor {
  name: string
  code: string
  precioPorKilo: number // Agrega el precio por kilo para cada sabor
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [DialogService, ConfirmationService, MessageService],
})
export class OrderComponent {
}
