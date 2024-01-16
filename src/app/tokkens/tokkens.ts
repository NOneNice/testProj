import { InjectionToken, Type } from '@angular/core';

export const DYNAMIC_COMPONENT_MAP = new InjectionToken<
  Record<string, Type<any>>
>('DYNAMIC_COMPONENT_MAP');
