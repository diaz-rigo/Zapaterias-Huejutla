import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCommonsModule } from './commons/commons.module';
// import { DetaillProductComponent } from './features/public/view/detaill-product/detaill-product.component';



@NgModule({
  declarations: [
    // DetaillProductComponent
  ],
  imports: [
    CommonModule,CoreCommonsModule
  ]
})
export class CoreModule { }
