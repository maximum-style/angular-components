import { Component } from '@angular/core';
import {Example2Directive} from '@components/example2/example2.directive';

@Component({
  imports: [Example2Directive],
  templateUrl: './example2-showcase.component.html',
  styleUrl: './example2-showcase.component.scss'
})
export class Example2ShowcaseComponent {

}
