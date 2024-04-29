import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import { AuthService } from '../../../../core/service/auth.service';
@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SignInFormComponent implements OnInit {

  formLogin: FormGroup;
  constructor(private router:Router,private authService: AuthService, private fb :FormBuilder) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  login(): void {
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;
    // this.authService.login(email, password);
    this.router.navigate(['/admin/admin-home']);
  }
}
