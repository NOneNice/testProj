import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DynamicModule } from 'ng-dynamic-component';
import { FormComponent } from './componets/form/form.component';
import { FormsModule } from '@angular/forms';
import { mockDataFiled, mockDataValue } from './mockData/mockData';
import { DYNAMIC_COMPONENT_MAP } from './tokkens/tokkens';
import { TextComponent } from './componets/types/text.component';
import { NumberComponent } from './componets/types/number.component';
import { DataComponent } from './componets/types/data.component';
import { CheckboxComponent } from './componets/types/checkbox.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    {
      provide: DYNAMIC_COMPONENT_MAP,
      useValue: {
        text: TextComponent,
        number: NumberComponent,
        date: DataComponent,
        checkbox: CheckboxComponent,
      },
    },
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    DynamicModule,
    FormsModule,
    FormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly mockDataFiled = mockDataFiled;
  protected readonly mockDataValue = new BehaviorSubject(mockDataValue);
}
