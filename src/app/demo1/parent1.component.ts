import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  template: `
    <p>Parent</p>
    <ng-content></ng-content>
    <p>Parent</p>
  `,
  styles: []
})
export class Parent1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
