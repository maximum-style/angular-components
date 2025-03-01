import { Directive, input } from '@angular/core';

@Directive({
  selector: 'button[max-button]',
  host: {
    '[class]': '"max-button " + type()',
    '[attr.aria-disabled]': 'true'
  },

})
export class ButtonDirective {

  public type = input<string>('primary');

}
