import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  @HostListener('mouseenter') mouseEnter() {
    this.changeBackgroundColor('green');
  }

  @HostListener('mouseleave') mouseLeave() {
    this.changeBackgroundColor('transparent');
  }

  private changeBackgroundColor(color: string) {
    this.renderer2.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      color
    );
  }
}
