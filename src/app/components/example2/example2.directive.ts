import { Directive } from '@angular/core';

@Directive({
  selector: '[maxExample2]',
  host: {
    'style': 'color: blue' 
  }
})
export class Example2Directive {

  constructor() { }

}
