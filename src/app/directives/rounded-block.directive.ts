import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoundedBlock]'
})
export class RoundedBlockDirective {
  constructor (
    private elementRef: ElementRef,
    private renderer : Renderer2,
    ) {
    console.log(this.elementRef);

    this.renderer.setStyle(this.elementRef.nativeElement, "border-radius", "100px");
  }

}
