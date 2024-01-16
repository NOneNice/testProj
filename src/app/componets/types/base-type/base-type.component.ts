import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Field } from '../../../interface/filed.interface';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-base-type',
  standalone: true,
  template: ``,
})
export class BaseTypeComponent {
  @Input() field: Field;
  @Input() value: BehaviorSubject<Record<string, unknown>>;
  @Output() outPut = new EventEmitter();

  onInput(e: any) {
    const outputObject: any = {};
    //TODO Переделать на instansof Event
    if (!!e?.target?.value) {
      outputObject[this.field.name] = e.target.value;
    } else {
      outputObject[this.field.name] = e;
    }
    this.outPut.emit(outputObject);
  }
}
