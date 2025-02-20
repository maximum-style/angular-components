import { Component } from '@angular/core';
import {InputDirective} from '@components/input/input.directive';
import {ShowcaseExampleComponent} from '@showcase/showcase-example/showcase-example.component';

@Component({
  imports: [ShowcaseExampleComponent, InputDirective],
  templateUrl: './input-showcase.component.html',
  styleUrl: './input-showcase.component.scss'
})
export class InputShowcaseComponent {
}
