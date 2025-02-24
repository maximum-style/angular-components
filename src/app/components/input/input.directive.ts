import { computed, Directive, input } from '@angular/core';

@Directive({
  selector: 'input[maxInput]',
  host: {
      'class': 'typeStyleClass()'
  }
})
export class InputDirective {

    public readonly type = input<'primary' | 'danger'>();
    public readonly typeStyleClass = computed(() => `max-button-${this.type()}`);

  constructor() { }

}
