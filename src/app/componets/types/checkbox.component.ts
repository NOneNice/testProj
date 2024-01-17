import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseTypeComponent } from './base-type/base-type.component';
import { ValidateComponent } from './validate/validate.component';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  template: `
    <p>{{ field.title }}</p>
    <input
      [type]="field.dataType"
      [value]="value.value[field.name]"
      (change)="onInput($event)"
      [checked]="!!value.value[field.name]"
    />
    <app-validate
      [type]="field.dataType"
      [value]="value.value[field.name]"
    ></app-validate>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ValidateComponent],
})
export class CheckboxComponent extends BaseTypeComponent {
  override onInput(e: any) {
    super.onInput(e.target.checked);
  }
}
