import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit,AfterViewChecked,
  OnDestroy
{
  @Input('srvElement') element: {type:string ,name:string, content: string};
  @Input() name:string;
  @ViewChild('heiding',{static:true}) header:ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph: ElementRef;

  constructor() {
    console.log("constructor called");
  }


  ngOnInit(){
    console.log("NgOnInit called");
    console.log('Text content :'+this.header.nativeElement.textContent);
    console.log('text content of paragprahe:'+ this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit called')
    console.log('text content of paragprahe:'+ this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log('AfterContentCheck called')
  }
  ngAfterViewInit() {
    console.log('AfterViewInit called');
    console.log('Text content :'+this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log('AfterViewCheck called')
  }

  ngOnDestroy() {
    console.log('OnDestroy')
  }
}
