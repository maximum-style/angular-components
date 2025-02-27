import { Directive } from '@angular/core';

@Directive({
  selector: 'input[maxInput]',
  host: {
      'class': 'max-input'
  }
})
export class InputDirective {

  constructor() { }

}
