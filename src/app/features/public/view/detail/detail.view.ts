import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { IproductResponse } from '../../../admin/interfaces/Product.interface';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../admin/commons/service/product.service';
import { ScrollServiceService } from '../../../../shared/services/scroll-service.service';
import { ProductResponse } from '../../../admin/models/Product-detail.model';
// import{CarritoFloatComponent}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.view.html',
  styleUrl: './detail.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class DetailView {

  productDetail!: ProductResponse;
  //
  idProduct!: string;
  constructor(
    private scrollService: ScrollServiceService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location) { }

  goBack(): void {

    this.location.back();
  }
  ngOnInit(): void {
    this.idProduct = this.route.snapshot.params['id'];
    // console.log('id desde URL', this.idProduct);
    this.productService.getById(this.idProduct).subscribe((response: IproductResponse) => {
      this.productDetail = new ProductResponse(response);
      // console.log('producto', this.productDetail);
    })
    this.scrollService.init();
  }
}
