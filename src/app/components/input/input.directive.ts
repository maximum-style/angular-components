import { AfterViewInit, Directive, effect, ElementRef,  inject, input, output, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: 'input[maxInput]',
  host: {
      'class': 'max-input',
      '(keyup)': 'onKeyUp($event.target)',
  },
})
export class InputDirective implements AfterViewInit {

    private renderer = inject(Renderer2);
    private element: ElementRef<HTMLInputElement> = inject(ElementRef);

    private wrapper: HTMLDivElement;

    private oldValue = '';

    public prefix = input<string>();
    public suffix = input<string>();
    
    public valueChanges = output<string>();
    public valueUpdates = output<{ old: string; new: string; }>();

    constructor() {
        this.wrapper = this.createWrapper();

        effect(() => this.onPrefixUpdate(this.prefix()));
        effect(() => this.onSuffixUpdate(this.suffix()));
    }

    public ngAfterViewInit(): void {
        const hostElement = this.element.nativeElement;
        this.renderer.insertBefore(hostElement.parentNode, this.wrapper, hostElement);

        this.renderer.appendChild(this.wrapper, hostElement);
    }

    private createWrapper() {
        const wrapper = this.renderer.createElement('div');
        this.renderer.addClass(wrapper, 'max-input-wrapper');
        return wrapper;
    }

    private onSuffixUpdate(suffix: string | undefined) {
        const suffixClass = 'max-input-suffix';
        const suffixVariable = '--suffix';

        if (suffix) {
            this.addAppendix(suffix, suffixClass, suffixVariable);
        } else {
            this.removeAppendix(suffixClass, suffixVariable);
        }
    }

    private onPrefixUpdate(prefix: string | undefined) {
        const prefixClass = 'max-input-prefix';
        const prefixVariable = '--prefix';

        if (prefix) {
            this.addAppendix(prefix, prefixClass, prefixVariable);
        } else {
            this.removeAppendix(prefixClass, prefixVariable);
        }
    }

    private addAppendix(appendixValue: string, appendixClass: string, appendixVariable: string) {
        this.wrapper.classList.add(appendixClass);
        this.renderer.setStyle(this.wrapper, appendixVariable, `'${appendixValue}'`, RendererStyleFlags2.DashCase);
    }

    private removeAppendix(appendixClass: string, appendixVariable: string) {
        this.wrapper.classList.remove(appendixClass);
        this.renderer.removeStyle(this.wrapper, appendixVariable, RendererStyleFlags2.DashCase);
    }


    public onKeyUp(element: HTMLInputElement) {
        const newValue = element.value;

        if (this.oldValue !== newValue) {
            this.valueChanges.emit(newValue);
            this.valueUpdates.emit({ old: this.oldValue, new: newValue });
            this.oldValue = newValue;
        }
    }
}
