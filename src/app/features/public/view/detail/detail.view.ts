import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../admin/commons/service/product.service';
import { ScrollServiceService } from '../../../../shared/services/scroll-service.service';
import { ProductResponse } from '../../../admin/models/Product-detail.model';
import { IProduct } from '../../../admin/interfaces/Product.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.view.html',
  styleUrls: ['./detail.view.scss'], // Corrección en el nombre del atributo
  encapsulation: ViewEncapsulation.None
})
export class DetailView {

  productDetail!: ProductResponse;
  idProduct!: string;

  constructor(
    private scrollService: ScrollServiceService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.idProduct = this.route.snapshot.params['id'];
    this.productService.getById(this.idProduct).subscribe((response: IProduct) => {
      this.productDetail = new ProductResponse(response);
      console.log( this.productDetail )
    });
    this.scrollService.init();
  }

  goBack(): void {
    this.location.back();
  }
}
