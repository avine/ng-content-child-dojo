import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  template: `
    <app-parent1>
      <app-child1></app-child1>
    </app-parent1>
  `,
  styles: []
})
export class Demo1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
