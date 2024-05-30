import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../../../../shared/services/search-service.service';
import { IproductResponse } from '../../../../admin/interfaces/Product.interface';
import { HeaderService } from '../../../../../core/service/header.service';

@Component({
  selector: 'app-result-product',
  templateUrl: './result-product.component.html',
  styleUrl: './result-product.component.scss'
})
export class ResultProductComponent implements OnInit {

  results!: any[];
  // showHeader: boolean = false;  // Variable para controlar si se encontraron resultados

  query!: string;
  resultadosEncontrados: boolean = true;  // Variable para controlar si se encontraron resultados
  showHeader: boolean = true;  // Variable para controlar si se encontraron resultados

  constructor(private headerService: HeaderService,private route: ActivatedRoute, private searchService: SearchService) { }

  originalProducts: IproductResponse[] = [] // Mantén una copia original de todos los productos
  allProducts: IproductResponse[] = [] // Mantén una copia original de todos los productos


  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.query = params['query'];
      if (!this.query || this.query.trim() === '') {
        this.resultadosEncontrados = false;
// es aqui donde el resultado es false de la busqueda
        // this.showHeader = this.resultadosEncontrados;
// aqui asignamos el valor para el header en el servicio
      // this.headerService.setShowHeader(this.showHeader)
        // !mostrar todos los productos

      } else {
        try {
          this.searchService.searchAnythingHome(this.query).subscribe(
            (data) => {
              this.results = data;
            
              this.originalProducts = data;
              this.resultadosEncontrados = this.results.length > 0;
              console.log(data);
            },
            error => {
              console.error('Error en la búsqueda:', error);
              this.resultadosEncontrados = false; // Actualiza resultadosEncontrados a false en caso de error
        


              // !getAllProduct

              this.searchService.getAllProduct().subscribe(
                (data) => {
                  this.results = data;
                  console.log("pasa por gfetAll");



                  this.allProducts = data;
                  // this.resultadosEncontrados = this.results.length > 0;
                  console.log(data);
                // }
                // error => {
                //   console.error('Error en la búsqueda:', error);
                //   this.resultadosEncontrados = false; // Actualiza resultadosEncontrados a false en caso de error

                })

            }


          );
        } catch (error) {
          
          // this.showHeader = this.headerService.getShowHeader();

          console.error('Error inesperado:', error);
          this.resultadosEncontrados = false; // Actualiza resultadosEncontrados a false en caso de error
          // Aquí podrías mostrar un mensaje de error al usuario si lo deseas

        }
      }
    });



  }

  // toggleShowHeader() {
  //   this.headerService.setShowHeader(!this.showHeader);
  // }

  // ngOnInit(): void {

  //   this.route.params.subscribe(params => {
  //     this.query = params['query'];

  //     // Aquí puedes realizar la lógica para buscar con el parámetro `query`
  //     // Por ejemplo, podrías llamar a un servicio para obtener los resultados de búsqueda
  //   });
  // }
}
