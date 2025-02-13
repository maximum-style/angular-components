import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleShowcaseComponent } from './example-showcase.component';

describe('ExampleShowcaseComponent', () => {
  let component: ExampleShowcaseComponent;
  let fixture: ComponentFixture<ExampleShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
