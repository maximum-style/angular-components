import { Component, input } from '@angular/core';

@Component({
  selector: 'max-showcase-example',
  templateUrl: './showcase-example.component.html',
  styleUrl: './showcase-example.component.scss'
})
export class ShowcaseExampleComponent {

    public readonly title = input.required<string>();
    public readonly description = input.required<string>();

}
