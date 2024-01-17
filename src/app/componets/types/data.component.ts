import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseTypeComponent } from './base-type/base-type.component';
import { ValidateComponent } from './validate/validate.component';

@Component({
  selector: 'app-data',
  standalone: true,
  template: `
    <p>{{ field.title }}</p>
    <input
      [type]="field.dataType"
      [value]="chengFormat(value.value[field.name])"
      (input)="onInput($event)"
    />
    <app-validate
      [type]="field.dataType"
      [value]="value.value[field.name]"
    ></app-validate>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ValidateComponent],
})
export class DataComponent extends BaseTypeComponent {
  chengFormat(date: any): string {
    const newDate = new Date(date).toISOString().split('T')[0];
    return newDate;
  }
}
