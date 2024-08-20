import { Component, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'
import { ProductService } from '../../../admin/commons/service/product.service'
import { IProduct } from '../../../admin/interfaces/Product.interface'
// import * as AOS from 'aos'
@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
})
export class HomeView {
  originalProducts: IProduct[] = [] // Mantén una copia original de todos los productos
skeletonItems = Array(5).fill(0); // Simula 5 skeletons
  responsiveOptions: any[] | undefined

  images!: string[]
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // AOS.init()
    // window.addEventListener('load', AOS.refresh)
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
        console.log(this.originalProducts)
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
