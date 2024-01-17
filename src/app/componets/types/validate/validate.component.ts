import { Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ValidateTextComponent } from './validateType/validate-text.component';

@Component({
  selector: 'app-validate',
  standalone: true,
  templateUrl: './validate.component.html',
  styles: ``,
  imports: [NgSwitch, ValidateTextComponent, NgSwitchCase],
})
export class ValidateComponent {
  @Input() type: string;
  @Input() value: unknown;
  protected readonly String = String;
}
