import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>child: {{ text }}</p>
    <button (click)="doNothing()">Do nothing...</button>
  `,
  styles: [],
  // Notice: the text will NOT be updated unless you click on the button...
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child1Component implements OnInit {
  text = 'Hello';

  constructor() { }

  ngOnInit() {
  }

  updateText(text: string) {
    this.text = text;
  }

  doNothing() {

  }
}
