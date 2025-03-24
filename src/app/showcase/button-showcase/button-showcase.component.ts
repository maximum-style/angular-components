import { Component } from '@angular/core';
import { ButtonDirective } from '@components/button/button.directive';
import { ShowcaseExampleComponent } from '@showcase/showcase-example/showcase-example.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
  faCoffee = faCoffee;

  public onClickEvent() {
    console.log('TO HABILITADO AAAAAAAAAA')
  }

}
