import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
})
export class BasicHighlightDirective implements OnChanges {
  @Input('appBasicHighlight') color: string;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
    this.changeBackgroundColor(simpleChanges.color.currentValue);
  }

  private changeBackgroundColor(color: string) {
    this.elementRef.nativeElement.style.background = color;
  }
}
