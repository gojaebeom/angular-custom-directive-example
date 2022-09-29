import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight5]',
})
export class Highlight5Directive implements OnInit {
  @Input() defaultBackgroundColor: string = 'red';
  @Input() highlightBackgroundColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = this.highlightBackgroundColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.defaultBackgroundColor;
  }
}
