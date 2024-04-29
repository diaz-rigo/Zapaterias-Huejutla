import { AbstractControl } from "@angular/forms";

export class SignUpValidator {

  // static formatPhone(formControl: AbstractControl): { [s: string]: string | boolean } | null {
  //   if (!formControl || !formControl.parent) {
  //     return null;
  //   }

  //   const phone: string = formControl.value;

  //   // Verificar si el campo de teléfono tiene solo números
  //   if (!/^\d+$/.test(phone)) {
  //     return {
  //       formatError: 'El teléfono debe contener solo números.'
  //     };
  //   }

  //   // Verificar si el teléfono tiene una longitud válida (por ejemplo, 10 dígitos)
  //   if (phone.length !== 10) {
  //     return {
  //       formatError: 'El teléfono debe tener exactamente 10 dígitos.'
  //     };
  //   }

  //   // Puedes agregar más validaciones específicas para el formato del teléfono si es necesario

  //   return null;
  // }
  static formatPhone(formControl: AbstractControl): { [s: string]: string | boolean } | null {
    if (!formControl || !formControl.parent) {
      return null;
    }

    const phone: string = formControl.value;

    // Verificar si el campo de teléfono tiene solo números
    if (!/^\d+$/.test(phone)) {
      return {
        formatError: 'El teléfono debe contener solo números.'
      };
    }

    // Verificar si el teléfono tiene una longitud válida (por ejemplo, 10 dígitos)
    if (phone.length !== 10) {
      return {
        formatError: 'El teléfono debe tener exactamente 10 dígitos.'
      };
    }

    // Puedes agregar más validaciones específicas para el formato del teléfono si es necesario

    return null;
  }

  static isValidName(control: AbstractControl): { [key: string]: string } | null {
    const name = control.value;

    // Verificar si el nombre contiene solo letras y espacios
  if (!/^[a-zA-ZáéíóúÁÉÍÓÚÜüñÑ\s]+$/.test(name)) {
      return { invalidName: 'El nombre debe contener solo letras y espacios.' };
    }

    // Verificar la longitud del nombre
    if (name.length < 3) {
      return { invalidName: 'El nombre debe tener al menos 3 caracteres.' };
    }

    return null;
  }

  static isValidLastName(control: AbstractControl): { [key: string]: string } | null {
    const lastName = control.value;

    // Verificar si el apellido contiene solo letras y espacios
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚÜüñÑ\s]+$/.test(lastName)) {
      return { invalidLastName: 'El apellido debe contener solo letras y espacios.' };
    }

    // Verificar la longitud del apellido
    if (lastName.length < 3) {
      return { invalidLastName: 'El apellido debe tener al menos 3 caracteres.' };
    }

    return null;
  }

  // Agregar más validaciones para otros campos si es necesario
  // ...

  static passwordMatch(group: AbstractControl): { [key: string]: string } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    // Verificar si las contraseñas coinciden
    if (password !== confirmPassword) {
      group.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: 'Las contraseñas no coinciden.' };
    }

    // Limpiar el error si las contraseñas coinciden
    group.get('confirmPassword')?.setErrors(null);

    return null;
  }

  static isValidDate(control: AbstractControl): { [key: string]: string } | null {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    // Verificar si la fecha seleccionada es menor o igual a la fecha actual
    if (selectedDate > currentDate) {
      return { invalidDate: 'La fecha no puede ser posterior a la fecha actual.' };
    }

    return null;
  }

  // Agregar más validaciones según sea necesario
  // ...
}
