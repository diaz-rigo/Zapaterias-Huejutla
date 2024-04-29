import { Component, ViewEncapsulation } from '@angular/core';
// import { AuthService } from '../../../core/service/auth.service';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/service/auth.service';
@Component({
  selector: 'app-acceso-usuario',
  templateUrl: './acceso-usuario.view.html',
  styleUrl: './acceso-usuario.view.scss',
  encapsulation: ViewEncapsulation.None
})
export class AccesoUsuarioView {

  formLogin: FormGroup;
  constructor(private router:Router,private authService: AuthService, private fb :FormBuilder) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;
    this.authService.login(email, password);
    this.router.navigate(['/admin/admin-home']);
  }


}
