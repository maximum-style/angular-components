import { Directive, effect, ElementRef, inject, input, output, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[maxInput]',
  host: {
      'class': 'max-input',
      '(keyup)': 'onKeyUp($event.target)',
  }
})
export class InputDirective {

    private element: ElementRef<HTMLInputElement> = inject(ElementRef);

    private oldValue = '';

    private wrapperStyles: [string, string][] = [];

    public prefix = input<string>();
    public suffix = input<string>();
    
    public valueChanges = output<string>();
    public valueUpdates = output<{ old: string; new: string; }>();

    constructor(renderer: Renderer2) {
        const wrapper = this.wrapElement(renderer);

        effect(() => {
            const prefix = this.prefix();
            if (prefix) {
                wrapper.classList.add('max-input-prefix');
                
                this.wrapperStyles.push(['--prefix', prefix]);

                this.updateWrapperStyle(wrapper);
            } else {
                wrapper.classList.remove('max-input-prefix');

                this.wrapperStyles = this.wrapperStyles.filter(([prop, _]) => prop !== '--prefix');

                this.updateWrapperStyle(wrapper);
            }
        })
    }

    public onKeyUp(element: HTMLInputElement) {
        const newValue = element.value;

        if (this.oldValue !== newValue) {
            this.valueChanges.emit(newValue);
            this.valueUpdates.emit({ old: this.oldValue, new: newValue });
            this.oldValue = newValue;
        }
    }

    private wrapElement(renderer: Renderer2) {
        const wrapper = renderer.createElement('div');
        renderer.addClass(wrapper, 'max-input-wrapper');

        const hostElement = this.element.nativeElement;
        renderer.insertBefore(hostElement.parentNode, wrapper, hostElement);

        renderer.appendChild(wrapper, hostElement);

        return wrapper;
    }

    private updateWrapperStyle(wrapper: { style: string }) {
       wrapper.style = this.wrapperStyles.map(([prop, value]) => `${prop}: ${value}`).join('; ');
    }

}
