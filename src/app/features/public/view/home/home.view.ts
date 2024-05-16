import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { IproductResponse } from '../../../admin/interfaces/Product.interface'
import { ProductService } from '../../../admin/commons/service/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
})
export class HomeView {
  originalProducts: IproductResponse[] = [] // Mantén una copia original de todos los productos

  responsiveOptions: any[] | undefined

  images!: string[]
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ]
    this.productService.getAllProducts().subscribe(
      (response) => {
        this.originalProducts = response
        // console.log(this.originalProducts)
      },
      (error) => {
        console.log('Error al cargar productos', error)
      },
    )
  }

  redirectTo(route: string): void {
    console.log(route)
    this.router.navigate(['/public', route])
  }
}
