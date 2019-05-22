import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>child: {{ text }}</p>
    <button (click)="triggerViewRender()">Trigger View Render...</button>
  `,
  styles: [],
  // Notice: the text will NOT be updated from the parent component,
  // unless you click on the button in this child component to trigger the re-render of the view...
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {
  @Input() text = 'Hello';

  constructor() { }

  ngOnInit() {
  }

  updateText(text: string) {
    this.text = text;
  }

  triggerViewRender() {

  }
}
