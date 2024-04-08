import {Directive, Input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean){ //toujour une propriéte mais avec un set
    if (!condition){
      this.vcRef.createEmbeddedView(this.templateRed);
    } else {
      this.vcRef.clear();

    }
  }

  constructor(private templateRed: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
