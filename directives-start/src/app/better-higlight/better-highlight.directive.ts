import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string ;

  constructor(private elRed: ElementRef,private renderer: Renderer2) { }

  ngOnInit() {
/*
    this.renderer.setStyle(this.elRed.nativeElement, 'background-color','green');
*/
    this.backgroundColor =  this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
/*
    this.renderer.setStyle(this.elRed.nativeElement,'background-color','blue');
*/
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
/*
    this.renderer.setStyle(this.elRed.nativeElement,'background-color','green');
*/
    this.backgroundColor=this.defaultColor;
  }
}
