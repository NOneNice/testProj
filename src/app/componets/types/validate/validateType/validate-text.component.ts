import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { BaseValidatorComponent } from './validateBase';

@Component({
  selector: 'app-vaildate-text',
  standalone: true,
  template: `
    <button (click)="enableValidation.setValue(!enableValidation.value)">
      Включить валидацию?
    </button>
    <div *ngIf="enableValidation.value">
      <h3>Проверить на спец Символы?</h3>
      <input
        type="checkbox"
        [formControl]="checkedSpecialSymbol"
        [checked]="checkedSpecialSymbol"
      />
      <h3>Необходималя длительность строки</h3>
      <input type="number" [formControl]="lengthenStr" min="1" />

      <div>Проходит ли валидацию: {{ form.valid }}</div>
    </div>
  `,
  styles: ``,
  imports: [JsonPipe, ReactiveFormsModule, NgIf],
})
export class ValidateTextComponent extends BaseValidatorComponent {
  checkedSpecialSymbol = new FormControl<boolean>(false);

  constructor() {
    super();
    this.fb.addControl('checkedSpecialSymbol', this.checkedSpecialSymbol);
  }

  override validateText(): (
    control: AbstractControl,
  ) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      let errors = super.validateText()(control);

      if (errors === null) return null;

      let errorMessage;
      if (
        !!this.lengthenStr.value &&
        control.value.length > this.lengthenStr.value
      ) {
        errorMessage = 'Строка слишком длинная';
        errors[errorMessage] = true;
      }

      if (
        this.checkedSpecialSymbol.value &&
        /[^а-яА-ЯёЁa-zA-Z\s]/.test(control.value)
      ) {
        errorMessage = 'Строка содержит специальные символы';
        errors[errorMessage] = true;
      }

      return Object.keys(errors).length > 0 ? errors : null;
    };
  }
}
