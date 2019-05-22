import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';

import { Child2Component } from './child2.component';

@Component({
  selector: 'app-parent2',
  template: `
    <button (click)="child.text$.next('Member updated')">Push new Subject value</button>
    <p>Parent</p>
    <ng-content></ng-content>
    <p>Parent</p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Parent2Component implements OnInit, AfterContentInit {
  @ContentChild(Child2Component) child: Child2Component;

  @ContentChildren(Child2Component) childs: QueryList<Child2Component>;

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
