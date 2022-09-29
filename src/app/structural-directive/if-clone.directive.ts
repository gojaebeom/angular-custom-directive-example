import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfClone]',
})
export class IfCloneDirective {
  @Input() set appIfClone(result: boolean) {
    if (!result) {
      this.vcRef.clear();
      return;
    }

    this.vcRef.createEmbeddedView(this.templateRef);
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
