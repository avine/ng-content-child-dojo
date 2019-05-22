import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  template: `
    <app-parent2>
      <app-child2></app-child2>
    </app-parent2>
  `,
  styles: []
})
export class Demo2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
