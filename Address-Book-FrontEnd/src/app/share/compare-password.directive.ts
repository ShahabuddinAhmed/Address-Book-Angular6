import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ComparePassword(name: string): ValidatorFn {
  return (c: AbstractControl): { [key: string]: any } => {
    if (c.value == null || c.value.length === 0) {
      return null;
    }
    const password = c.root.get(name).value;

    if (password !== c.value) {
      return { passwordInvalid: true };
    }
    return null;
  };
}
