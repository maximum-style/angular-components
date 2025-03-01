import { Component } from '@angular/core';
import { ButtonDirective } from '@components/button/button.directive';
import { ShowcaseExampleComponent } from '@showcase/showcase-example/showcase-example.component';

@Component({
  imports: [
    ButtonDirective,
    ShowcaseExampleComponent
  ],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss']
})
export class ButtonShowcaseComponent {

  

}
