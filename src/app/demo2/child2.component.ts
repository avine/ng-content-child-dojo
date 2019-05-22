import { Subject } from 'rxjs';

import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>child: {{ text$ | async }}</p>
    <button (click)="triggerViewRender()">Trigger View Render...</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Child2Component implements OnInit, OnChanges {
  @Input() text$ = new Subject<string>();

  text = '';

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('Child Changes!');
  }

  updateText(text: string) {
    this.text = text;
  }

  triggerViewRender() {

  }
}
