import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../../service/header.service';

@Component({
  selector: 'app-header-categoria',
  templateUrl: './header-categoria.component.html',
  styleUrl: './header-categoria.component.scss'
})
export class HeaderCategoriaComponent implements OnInit {

  
  showHeader: boolean = false;  // Variable para controlar si se encontraron resultados


  constructor(private headerService: HeaderService) { }

  ngOnInit(){
    
    this.showHeader = this.headerService.getShowHeader(); // Assuming it returns boolean
    console.log("header=>", this.showHeader);

  }


}
