import { Directive, input } from '@angular/core';

type MaxButtonType = 'primary' | 'secondary' | 'auxiliary';

@Directive({
  selector: 'button[maxButton]',
  host: {
    '[class]': '"max-button " + type()'
  }
})
export class ButtonDirective {

  public type = input<MaxButtonType>('primary');

}
