import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../models/item.model';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss',
})
export class NewProductComponent {
  alphaNumericPattern = /^(?:[a-zA-Z0-9]+)?$/;

  productoForm = this.fb.group({
    title: ['', { validators: [Validators.required] }],
    description: ['', { validators: [Validators.required] }],
    photos: this.fb.array([], [Validators.required, this.hasDuplicate('url')]),
    prices: this.fb.array([], [Validators.required, this.hasDuplicate('tag')]),
    offerDiscount: [],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewProductComponent>,
    private productService: ProductsService
  ) {}

  get photos() {
    return this.productoForm.controls['photos'] as FormArray;
  }

  addPhoto(): void {
    const photoForm = this.fb.group({
      url: ['', [Validators.required]],
    });
    this.photos.push(photoForm);
  }

  deletePhoto(index: number): void {
    this.photos.removeAt(index);
  }

  get prices() {
    return this.productoForm.controls['prices'] as FormArray;
  }

  addPrice(): void {
    const priceForm = this.fb.group({
      tag: [
        '',
        [Validators.required, Validators.pattern(this.alphaNumericPattern)],
      ],
      price: ['', Validators.required],
    });
    this.prices.push(priceForm);
  }

  deletePrice(index: number): void {
    this.prices.removeAt(index);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  addProduct(): void {
    const { title, description, offerDiscount, photos, prices } =
      this.productoForm!.value;

    let newItem: Item = {
      id: crypto.randomUUID(),
      title: title!,
      description: description!,
      photos: photos!.map((p: any) => p.url),
      prices: {},
      offerDiscount: 0,
    };

    prices?.map((p: any) => (newItem.prices[p.tag] = p.price));

    console.log(newItem);
    this.productService.addItem(newItem);
  }

  hasDuplicate(fieldValidation: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formArray: FormArray = control as FormArray;
      let duplicateError: boolean = false;
      let map = new Map<string, number>();

      formArray.controls.map((groupForm: AbstractControl, index: number) => {
        const currentControlValue = groupForm.get(fieldValidation)?.value;

        if (currentControlValue !== '') {
          if (map.has(currentControlValue)) {
            groupForm.get(fieldValidation)?.setErrors({ notUnique: true }); // set error to current control so mat-error appears
            const controlIndex: number = map.get(
              groupForm.get(fieldValidation)!.value
            )!;
            formArray.controls[controlIndex]
              .get(fieldValidation)
              ?.setErrors({ notUnique: true }); // set error to original control so mat-error appears
            duplicateError = true;
          } else {
            map.set(currentControlValue, index);

            if (!groupForm.get(fieldValidation)?.hasError('pattern')) {
              groupForm.get(fieldValidation)?.setErrors(null);
            }
          }
        } else {
          delete groupForm.get(fieldValidation)!.errors!['notUnique'];
        }
      });

      return duplicateError ? { notUnique: true } : null;
    };
  }
}
