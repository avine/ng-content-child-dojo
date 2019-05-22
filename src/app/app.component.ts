import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nav class="menu">
        <a *ngFor="let link of links"
          class="link"
          routerLinkActive="link--active"
          [routerLink]="link">
          {{ link }}
        </a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .container {
      margin: 2rem auto;
      max-width: 460px;
      box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.2);
      border: 1px solid #ddd;
      background-color: white;
      padding: 1rem; border-radius: 3px; }
    .menu {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid #ddd;
      line-height: 1.5em }
    .link {
      display: inline-block;
      margin-right: 0.5rem;
      padding: 0 0.5rem;
      border-radius: 3px; }
    .link--active {
       background-color: dodgerBlue;
       color: white;
       text-decoration: none; }
  `]
})
export class AppComponent {
  links = ['demo1', 'demo2'];
}
