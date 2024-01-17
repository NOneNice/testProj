import { Component, Input } from '@angular/core';
import { JsonPipe, NgSwitch, NgSwitchCase } from '@angular/common';
import { ValidateTextComponent } from './validateType/validate-text.component';
import { ValidateNumberComponent } from './validateType/validate-number.component';

@Component({
  selector: 'app-validate',
  standalone: true,
  templateUrl: './validate.component.html',
  styles: ``,
  imports: [
    NgSwitch,
    ValidateTextComponent,
    NgSwitchCase,
    ValidateNumberComponent,
    JsonPipe,
  ],
})
export class ValidateComponent {
  @Input() type: string;
  @Input() value: unknown;
  protected readonly String = String;
  protected readonly Number = Number;
}
