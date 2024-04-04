import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent {
  validators = Validators;

  productoForm = this.fb.group({
    title: ['', { validators: [Validators.required] }],
    description: ['', { validators: [Validators.required] }],
    photos: this.fb.array([], [Validators.required, this.hasDuplicate()]),
    // prices: this.fb.array([], Validators.required),
    offerDiscount: [],
  });

  constructor(private fb: FormBuilder) {}

  get photos() {
    return this.productoForm.controls['photos'] as FormArray;
  }

  addPhoto(): void {
    const photoForm = this.fb.group({
      url: ['', Validators.required],
    });
    this.photos.push(photoForm);
  }

  deletePhoto(index: number): void {
    this.photos.removeAt(index);
  }

  addProduct(): void {
    console.log(this.productoForm);
    console.log(this.productoForm.value);
  }

  duplicates = [];

  hasDuplicate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formArray: FormArray = control as FormArray;

      let duplicateError: boolean = false;
      let map = new Map<string, number>();

      // done in one loop
      formArray.controls.map((control, index) => {
        // restore errors from current control
        control.setErrors(null);
        // loop and add to Map if duplicate exists set error to duplicate and original value
        if (map.has(control.get('url')?.value)) {
          control.setErrors({ notUnique: true });
          const controlIndex: number = map.get(control.get('url')!.value)!;
          formArray.controls[controlIndex].setErrors({ notUnique: true });
          duplicateError = true;
        } else {
          map.set(control.get('url')?.value, index);
        }
      });

      return duplicateError ? { duplicateValues: true } : null;
    };
  }
}
