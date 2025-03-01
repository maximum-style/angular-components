import { Directive } from '@angular/core';

@Directive({
  selector: '[max-button]',
  host: {
    'class': 'button' 
  },
  
})
export class ButtonDirective {

  constructor() { }

}
