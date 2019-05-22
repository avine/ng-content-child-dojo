import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './demo1/child1.component';
import { Demo1Component } from './demo1/demo1.component';
import { Parent1Component } from './demo1/parent1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Parent2Component } from './demo2/parent2.component';
import { Child2Component } from './demo2/child2.component';

@NgModule({
  declarations: [
    AppComponent,

    Demo1Component,
    Parent1Component,
    Child1Component,
    Demo2Component,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
