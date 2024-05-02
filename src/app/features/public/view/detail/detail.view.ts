import { Location } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.view.html',
  styleUrl: './detail.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class DetailView {


  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
