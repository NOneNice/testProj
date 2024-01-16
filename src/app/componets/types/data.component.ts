import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseTypeComponent } from './base-type/base-type.component';

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
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataComponent extends BaseTypeComponent {
  chengFormat(date: any): string {
    const newDate = new Date(date).toISOString().split('T')[0];
    console.log(newDate);
    return newDate;
  }
}
