import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../../shared/services/search-service.service';
import { HeaderService } from '../../../../core/service/header.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.view.html',
  styleUrl: './search-results.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class SearchResultsView implements OnInit {

showHeader: boolean = false;  // Variable para controlar si se encontraron resultados


  constructor(private headerService: HeaderService) { }

  

  ngOnInit(){
    
    this.showHeader = this.headerService.getShowHeader(); // Assuming it returns boolean
    console.log("header=>", this.showHeader);


    

  }

  
}
