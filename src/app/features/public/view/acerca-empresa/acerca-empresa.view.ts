import { Component, ViewEncapsulation } from '@angular/core';


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  
}

@Component({
  selector: 'app-acerca-empresa',
  templateUrl: './acerca-empresa.view.html',
  styleUrl: './acerca-empresa.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class AcercaEmpresaView {

  events: EventItem[];

  constructor() {
    this.events = [
      { status: 'Direccion',  icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
   
      { status: 'Processing', icon: 'pi pi-cog', color: '#673AB7' },
      // { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
      // { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
    ];
  }
  

}
