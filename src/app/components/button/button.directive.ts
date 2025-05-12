import { computed, Directive, effect, ElementRef, inject, input, linkedSignal, Renderer2 } from '@angular/core';

type MaxButtonType = 'primary' | 'secondary' | 'auxiliary';
type MaxButtonSeverity = 'success' | 'warning' | 'danger';
type MaxButtonIconPosition = 'left' | 'right';

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
  public iconPosition = input<MaxButtonIconPosition>('left');

  private renderer = inject(Renderer2);
  private element: ElementRef<HTMLInputElement> = inject(ElementRef);

  constructor() {
    effect(() => {
      if (!this.icon()) {
        return;
      }
      const hostElement = this.element.nativeElement;
      const iconElement = this.renderer.createElement('i');
      const iconClasses = (this.icon() as string).split(' ');
      iconClasses.forEach((iconClass) => this.renderer.addClass(iconElement, iconClass));

      switch (this.iconPosition()) {
        case 'left':
          this.renderer.addClass(iconElement, 'icon-left');
          this.renderer.insertBefore(hostElement, iconElement, hostElement.firstChild);
          break;
        case 'right':
          this.renderer.addClass(iconElement, 'icon-right');
          this.renderer.appendChild(hostElement, iconElement);
          break;
      }
    });
  }

  public getTypeOrSeverity = () => this.severity() ? this.severity() : this.type();

  public hasIcon = () => !!this.icon();

  // public iconUpdate = computed(() => {
  //   const icon = this.icon();

  //   if (!icon) {
  //     return;
  //   }
  //   const hostElement = this.element.nativeElement;
  //   const iconElement = this.renderer.createElement('i');
  //   const iconClasses = (icon as string).split(' ');
  //   iconClasses.forEach((iconClass) => this.renderer.addClass(iconElement, iconClass));

  //   switch (this.iconPosition()) {
  //     case 'left':
  //       this.renderer.addClass(iconElement, 'icon-left');
  //       this.renderer.insertBefore(hostElement, iconElement, hostElement.firstChild);
  //       break;
  //     case 'right':
  //       this.renderer.addClass(iconElement, 'icon-right');
  //       this.renderer.appendChild(hostElement, iconElement);
  //       break;
  //   }
  // });
}
