import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight4]',
})
export class Highlight4Directive implements OnInit {
  @Input('appHighlight4') highlightColor = 'black';
  @HostBinding('style.color') color: string;

  ngOnInit() {
    this.color = this.highlightColor;
  }
}
