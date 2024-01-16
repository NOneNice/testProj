import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseTypeComponent } from './base-type/base-type.component';

@Component({
  selector: 'app-text',
  standalone: true,
  template: `
    <p>{{ field.title }}</p>
    <input
      [type]="field.dataType"
      [value]="value.value[field.name]"
      (input)="onInput($event)"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent extends BaseTypeComponent {}
