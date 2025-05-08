import { Component } from '@angular/core';
import { ButtonDirective } from '@components/button/button.directive';
import { ShowcaseExampleComponent } from '@showcase/showcase-example/showcase-example.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [
    ButtonDirective,
    ShowcaseExampleComponent,
    FontAwesomeModule
  ],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss']
})
export class ButtonShowcaseComponent {
}
