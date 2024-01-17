import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  Type,
} from '@angular/core';
import { Field } from '../../interface/filed.interface';
import { NgForOf } from '@angular/common';
import { DynamicComponent, DynamicIoDirective } from 'ng-dynamic-component';
import { DYNAMIC_COMPONENT_MAP } from '../../tokkens/tokkens';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [NgForOf, DynamicComponent, DynamicIoDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() fields: readonly Field[];
  @Input() value$: BehaviorSubject<Record<string, unknown>>;

  constructor(
    @Inject(DYNAMIC_COMPONENT_MAP)
    private getComponentsByTypes: Record<string, Type<any>>,
  ) {}

  getComponent(type: string) {
    return this.getComponentsByTypes[type];
  }

  outputs = {
    outPut: (type: any) => {
      this.value$.next({ ...this.value$.value, ...type });
    },
  };
}
