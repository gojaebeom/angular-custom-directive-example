import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Highlight1Directive } from './attribute-directive/highlight1.directive';
import { Highlight2Directive } from './attribute-directive/highlight2.directive';
import { Highlight3Directive } from './attribute-directive/highlight3.directive';
import { Highlight4Directive } from './attribute-directive/highlight4.directive';
import { Highlight5Directive } from './attribute-directive/highlight5.directive';
import { IfCloneDirective } from './structural-directive/if-clone.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    Highlight1Directive,
    Highlight2Directive,
    Highlight3Directive,
    Highlight4Directive,
    Highlight5Directive,
    IfCloneDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
