import { Directive, input } from '@angular/core';

type MaxButtonType = 'primary' | 'secondary' | 'auxiliary';
type MaxButtonSeverity = 'success' | 'warning' | 'danger';

@Directive({
  selector: 'button[maxButton]',
  host: {
    '[class]': '"max-button " + getTypeOrSeverity()',
    '[class.disabled]': 'disabled()',
    '[class.with-icon]': 'hasIcon()'
  }
})
export class ButtonDirective {

  public type = input<MaxButtonType>('primary');
  public disabled = input<boolean>(false);
  public severity = input<MaxButtonSeverity>();
  public icon = input<string>();

  public getTypeOrSeverity() {
    return this.severity() ? this.severity() : this.type();
  }

  public hasIcon() {
    return !!this.icon();
  }
}
