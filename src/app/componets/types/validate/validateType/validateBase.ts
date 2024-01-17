import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  UntypedFormGroup,
  ValidationErrors,
} from '@angular/forms';

@Directive()
export class BaseValidatorComponent implements OnInit, OnChanges {
  @Input() value: unknown;

  enableValidation = new FormControl<boolean>(false);
  lengthenStr = new FormControl<number>(10);
  fb = new UntypedFormGroup({
    lengthenStr: this.lengthenStr,
    enableValidation: this.enableValidation,
  });
  form: FormControl;

  ngOnInit() {
    this.form = new FormControl(this.value, this.validateText());
    this.fb.valueChanges.subscribe(() => {
      this.form.updateValueAndValidity();
    });
  }

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

      return errorObj;
    };
  }
}
