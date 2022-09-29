import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnChanges {
  @Input('appBetterHighlight') color: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('better');
    this.changeColor(simpleChanges.color.currentValue);
  }

  private changeColor(color: string) {
    console.log(color);
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color
    );
  }
}
