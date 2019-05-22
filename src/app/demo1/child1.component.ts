import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>child</p>
  `,
  styles: []
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
