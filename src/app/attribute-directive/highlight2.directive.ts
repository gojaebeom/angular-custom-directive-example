import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight2]',
})
export class Highlight2Directive implements OnInit {
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', 'green');
  }
}
