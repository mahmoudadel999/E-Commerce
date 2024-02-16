import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private _AuthService: AuthService) {}

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(
      null,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)
    ),
    rePassword: new FormControl(
      null,
      Validators.pattern(/^[A-Z][a-z0-9]{6,20}$/)
    ),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
      ),
    ]),
  });

  handleForm(): void {
    console.log(this.registerForm);

    if (this.registerForm.valid) {
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (resp) => {
          console.log(resp);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
