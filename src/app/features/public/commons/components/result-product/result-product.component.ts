import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../../../../shared/services/search-service.service';
import { HeaderService } from '../../../../../core/service/header.service';
import { IProduct } from '../../../../admin/interfaces/Product.interface';

@Component({
  selector: 'app-result-product',
  templateUrl: './result-product.component.html',
  styleUrls: ['./result-product.component.scss']
})
export class ResultProductComponent implements OnInit {

  results!: any[];
  query!: string;
  resultadosEncontrados: boolean = true;
  showHeader: boolean = true;

  constructor(
    private router: Router,
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) { }

  originalProducts: IProduct[] = [];
  allProducts: IProduct[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      if (!this.query || this.query.trim() === '') {
        this.resultadosEncontrados = false;
        this.loadAllProducts();
      } else {
        this.searchService.searchAnythingHome(this.query).subscribe(
          (data) => {
            this.results = data;
            this.originalProducts = data;
            this.resultadosEncontrados = this.results.length > 0;
            if (!this.resultadosEncontrados) {
              this.loadAllProducts();
            }
          },
          error => {
            console.error('Error en la búsqueda:', error);
            this.resultadosEncontrados = false;
            this.loadAllProducts();
          }
        );
      }
    });
  }

  private loadAllProducts(): void {
    this.searchService.getAllProduct().subscribe(
      (data) => {
        this.allProducts = data;
      },
      error => {
        console.error('Error al cargar todos los productos:', error);
      }
    );
  }

  goToDetail(product: IProduct): void {
    this.router.navigateByUrl(`public/detail/${product._id}`);
  }
}
