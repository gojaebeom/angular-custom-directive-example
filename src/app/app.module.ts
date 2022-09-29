import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { BetterHighlightDirective } from './directive/better-highlight.directive';
import { HoverHighlightDirective } from './directive/hover-highlight.directive';
import { BetterHoverHighlightDirective } from './directive/better-hover-highlight.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HoverHighlightDirective,
    BetterHoverHighlightDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
