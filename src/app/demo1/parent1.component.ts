import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';

import { Child1Component } from './child1.component';

@Component({
  selector: 'app-parent1',
  template: `
    <button (click)="childs.first.text = 'Member updated'">Update child member</button>
    <button (click)="childs.first.updateText('Child method called')">Call child method</button>
    <p>Parent</p>
    <ng-content></ng-content>
    <p>Parent</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Parent1Component implements OnInit, AfterContentInit {
  @ContentChild(Child1Component) child: Child1Component;

  @ContentChildren(Child1Component) childs: QueryList<Child1Component>;

  constructor() {

  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('child', this.child);
    console.log('childs', this.childs);
    console.log('ok', this.childs.first === this.child);
  }
}
