import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight3]',
})
export class Highlight3Directive implements OnInit {
  @HostBinding('style.color') color: string;

  ngOnInit() {
    this.color = 'purple';
  }
}
