import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static email(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (control.value && !emailRegex.test(control.value)) {
      return { email: true }
    }
    return null;
  }
  static minLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && control.value.length < minLength) {
        return { minlength: { requiredLength: minLength, actualLength: control.value.length } };
      }
      return null;
    };
  }
  static noWhitespace(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.trim().length === 0) {
      return { whitespace: true };
    }
    return null;
  }
}
