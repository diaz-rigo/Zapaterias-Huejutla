import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../../services/sign-in.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { StorageService } from '../../../../../core/service/storage.service';
import { SessionService } from '../../../../../core/service/session.service';
import { ERol } from '../../../../../shared/constants/rol.enum';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInFormComponent implements OnInit {
  errorMessage!: string;
  userROL!: string;
  loginAttempts: number = 0;
  formLogin: FormGroup;

  constructor(
    private router: Router,
    private signInService: SignInService,
    private fb: FormBuilder,
    private storageService: StorageService,
    private sessionService: SessionService,
  ) {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): void {
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;

    this.signInService
      .signIn({ email, password })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          this.errorMessage = error.error.message || 'Error en la solicitud';
          alert(this.errorMessage); // Mostrar el error en un alert
          return throwError(this.errorMessage);
        }),
      )
      .subscribe((response) => {
        if (response) {
          this.storageService.setToken(response.token);
          const userData = this.sessionService.getUserData();
          if (userData) {
            this.userROL = userData.rol;
            if (this.userROL === ERol.ADMIN) {
              this.router.navigateByUrl('/admin');
            } else if (this.userROL === ERol.CLIENT) {
              this.router.navigate(['/']).then(() => {
                window.location.reload();
              });
            }
          }
        }
      });
  }
}
