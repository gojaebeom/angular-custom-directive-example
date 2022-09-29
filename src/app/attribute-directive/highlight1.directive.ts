import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight1]',
})
export class Highlight1Directive implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'blue';
  }
}
