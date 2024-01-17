import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../../../interface/filed.interface';
import { BehaviorSubject } from 'rxjs';

@Directive()
export class BaseTypeComponent {
  @Input() field: Field;
  @Input() value: BehaviorSubject<Record<string, unknown>>;
  @Output() outPut = new EventEmitter();

  onInput(e: any) {
    const outputObject: any = {};
    if (e instanceof Event) {
      let target = e.target as HTMLInputElement;
      if (!!target.value) {
        outputObject[this.field.name] = target.value;
      }
    } else {
      outputObject[this.field.name] = e;
    }
    this.outPut.emit(outputObject);
  }
}
