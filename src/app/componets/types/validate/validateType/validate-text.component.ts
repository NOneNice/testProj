import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

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
    </div>
  `,
  styles: ``,
  imports: [JsonPipe, ReactiveFormsModule, NgIf],
})
export class ValidateTextComponent implements OnInit, OnChanges {
  @Input() value: string;

  enableValidation = new FormControl<boolean>(false);
  lengthenStr = new FormControl<number>(10);
  checkedSpecialSymbol = new FormControl<boolean>(false);
  fb = new FormGroup([
    this.checkedSpecialSymbol,
    this.lengthenStr,
    this.enableValidation,
  ]);

  ngOnInit() {
    this.form = new FormControl<string>(this.value, this.validateText());
    this.fb.valueChanges.subscribe(() => {
      this.form.updateValueAndValidity();
    });
  }
  form: FormControl;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      this.form?.setValue(this.value);
    }
  }

  validateText(): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const errorObj: any = {};
      let errorMessage: string = '';

      if (!this.enableValidation.value) {
        return null;
      }

      if (!this.lengthenStr.value || this.lengthenStr.value === 0) {
        errorMessage = 'Значение не может быть null или 0';
        errorObj[errorMessage] = true;
      }

      if (
        !!this.lengthenStr.value &&
        control.value.length > this.lengthenStr.value
      ) {
        errorMessage = 'Строка слишком длинная';
        errorObj[errorMessage] = true;
      }

      if (
        this.checkedSpecialSymbol.value &&
        /[^а-яА-ЯёЁa-zA-Z\s]/.test(control.value)
      ) {
        errorMessage = 'Строка содержит специальные символы';
        errorObj[errorMessage] = true;
      }

      console.log(errorObj);

      return Object.keys(errorObj).length > 0 ? errorObj : null;
    };
  }
}
