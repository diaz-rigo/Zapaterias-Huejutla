import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: [
    './home-content.component.scss',
    './figura.scss',
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeContentComponent {


  responsiveOptions: any[] | undefined;

  // constructor(private productService: ProductService) { }

  ngOnInit() {
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



  // images!: string[];


}
