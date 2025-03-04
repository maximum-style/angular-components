import { Directive, output } from '@angular/core';

@Directive({
  selector: 'input[maxInput]',
  host: {
      'class': 'max-input',
      '(keyup)': 'onKeyUp($event.target)',
  }
})
export class InputDirective {

    private oldValue = '';
    
    public valueChanges = output<string>();
    public valueUpdates = output<{ old: string; new: string; }>();

    public onKeyUp(element: HTMLInputElement) {
        const newValue = element.value;

        this.valueChanges.emit(newValue);

        if (this.oldValue !== newValue) {
            this.valueUpdates.emit({ old: this.oldValue, new: newValue });
            this.oldValue = newValue;
        }
    }

}
