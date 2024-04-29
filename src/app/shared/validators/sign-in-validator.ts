import { AbstractControl } from "@angular/forms";

export class SignInValidator {
  static formatPassword(formControl: AbstractControl): { [s: string]: string | boolean } | null {
    if (!formControl || !formControl.parent) {
      return null;
    }

    const password: string = formControl.value;

    // Verificar si la contraseña tiene al menos una letra mayúscula
    if (!/[A-Z]/.test(password)) {
      return {
        formatError: 'La contraseña debe contener al menos una letra mayúscula.'
      };
    }

    // Verificar si la contraseña tiene al menos una letra minúscula
    if (!/[a-z]/.test(password)) {
      return {
        formatError: 'La contraseña debe contener al menos una letra minúscula.'
      };
    }

    // Verificar si la contraseña tiene al menos un número
    if (!/\d/.test(password)) {
      return {
        formatError: 'La contraseña debe contener al menos un número.'
      };
    }

    // Verificar si la contraseña tiene al menos un carácter especial ($, @, !, %, *, ?, &)
    if (!/[$@$!%*?&-]/.test(password)) {
      return {
        formatError: 'La contraseña debe contener al menos un carácter especial ($, @, !, %, *, ?, &,-).'
      };
    }

    // Verificar si la contraseña tiene al menos 8 caracteres
    if (password.length < 8) {
      return {
        formatError: 'La contraseña debe tener al menos 8 caracteres.'
      };
    }

    return null;
  }
}
