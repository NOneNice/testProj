import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseTypeComponent } from './base-type/base-type.component';
import { ValidateComponent } from './validate/validate.component';

@Component({
  selector: 'app-number',
  standalone: true,
  template: `
    <p>{{ field.title }}</p>
    <input
      [type]="field.dataType"
      [value]="value.value[field.name]"
      (input)="onInput($event)"
    />
    <app-validate [type]="field.dataType"></app-validate>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ValidateComponent],
})
export class NumberComponent extends BaseTypeComponent {}
