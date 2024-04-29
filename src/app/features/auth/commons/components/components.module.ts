import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



const COMPONENT__ = [SignInFormComponent]
@NgModule({
  declarations: [
    ...COMPONENT__
  ],
  exports: [
    ...COMPONENT__
  ]	,
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,RouterModule
  ]
})
export class AuthComponentsModule { }
