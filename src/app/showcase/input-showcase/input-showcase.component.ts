import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {InputDirective} from '@components/input/input.directive';
import {ShowcaseExampleComponent} from '@showcase/showcase-example/showcase-example.component';

@Component({
  imports: [
      ShowcaseExampleComponent, 
      InputDirective,
      FormsModule,
      ReactiveFormsModule
  ],
  templateUrl: './input-showcase.component.html',
  styleUrl: './input-showcase.component.scss'
})
export class InputShowcaseComponent {

    public e3_value!: string;
    public e4_formGroup: FormGroup;
    public e5_value!: string;
    public e6_value?: { old: string; new: string};
    public e7_formGroup: FormGroup;

    constructor() {
        this.e4_formGroup = this.buildE4FormGroup();
        this.e7_formGroup = this.buildE7FormGroup();
    }

    private buildE4FormGroup() {
        return new FormGroup({
            e4_control: new FormControl<string>(''),
        })
    }

    public E5_valueChanges(value: string) {
        this.e5_value = value;
    }

    public E6_valueUpdates(value: { old: string; new: string; }) {
        this.e6_value = value;
    }

    private buildE7FormGroup() {
        return new FormGroup({
            control: new FormControl<string>('', Validators.required)
        })
    }
}

