import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private showHeaderSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   // Servicio
// @Injectable({
//   providedIn: 'root'
// })
// export class HeaderService {
  private showHeader: boolean = true;

  constructor() { }

  getShowHeader() {
    console.log("entrando en el servicio get HeaderService")
    return this.showHeader;
  }

  setShowHeader(showHeader: boolean) {
    console.log("entrando en el servicio set HeaderService:", showHeader)
    
    this.showHeader = showHeader;
  }
}

// // Componente 1
// constructor(private headerService: HeaderService) { }

// ngOnInit() {
//   this.showHeader = this.headerService.getShowHeader();
// }

// toggleShowHeader() {
//   this.headerService.setShowHeader(!this.showHeader);
// }

// Componente 2
// constructor(private headerService: HeaderService) { }

// ngOnInit() {
//   this.headerService.getShowHeader().subscribe(showHeader => {
//     this.showHeader = showHeader;
//   });


