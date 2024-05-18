import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrl: './detail-image.component.scss'
})
export class DetailImageComponent {
  @Input()
  images!: string[];
  srcMain!: string;




  ngOnInit(): void {
    if (this.images.length > 0) {
      this.srcMain = this.images[0];
    }

  }
  getImages(url: string): string {
    return `${url}`; // Este es el método que debes definir en tu clase
  }


  toogleImg(url: string): void {
    this.srcMain = this.getImages(url);
  }

}
