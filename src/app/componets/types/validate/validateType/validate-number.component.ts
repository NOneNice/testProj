import { Component, Input, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { BaseValidatorComponent } from './validateBase';

@Component({
  selector: 'app-validate-number',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, JsonPipe],
  template: `
    <button (click)="enableValidation.setValue(!enableValidation.value)">
      Включить валидацию?
    </button>
    <div *ngIf="enableValidation.value">
      <h3>Необходималя длительность строки</h3>
      <input type="number" [formControl]="lengthenStr" min="1" />
    </div>
  `,
})
export class ValidateNumberComponent extends BaseValidatorComponent {
  override validateText(): (
    control: AbstractControl,
  ) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      let errors = super.validateText()(control);
      if (errors === null) return null;
      let errorMessage;
      if (!!this.lengthenStr.value && control.value < this.lengthenStr.value) {
        errorMessage = 'Число должно быть больше чем';
        errors[errorMessage] = true;
      }

      return Object.keys(errors).length > 0 ? errors : null;
    };
  }
}
