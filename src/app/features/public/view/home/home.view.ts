import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrl: './home.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class HomeView {


  responsiveOptions: any[] | undefined;

  // constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //   this.products = products;
    // });
    this.images = [
      'https://res.cloudinary.com/dvvhnrvav/image/upload/v1712184564/productMeanZapateriaHuejutla/marcas/v3t9d2fpfgfs5exx85hb.png',
      'https://res.cloudinary.com/dvvhnrvav/image/upload/v1712184624/productMeanZapateriaHuejutla/marcas/tlwtmtsgfyw4w7djwpae.png',
      'https://res.cloudinary.com/dvvhnrvav/image/upload/v1712184637/productMeanZapateriaHuejutla/marcas/odvtxdk2rdvehlyepyqo.png',
      'https://res.cloudinary.com/dvvhnrvav/image/upload/v1712184735/productMeanZapateriaHuejutla/marcas/wjy5bx9rbaxmytyiyon5.png',
      // 'https://via.placeholder.com/600x300',
      // 'https://via.placeholder.com/600x300',
      // 'https://via.placeholder.com/600x300'
    ];
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
         numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }



  images!: string[];


  constructor(private router: Router) {}

  redirectTo(route: string): void {
    // this.sidebarVisible = false;
    console.log(route);
    this.router.navigate(['/public', route]); // Utiliza la navegación de Angular
  }
}
