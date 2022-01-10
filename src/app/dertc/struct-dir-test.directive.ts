import { Directive,ViewContainerRef,TemplateRef,OnInit,Renderer2} from '@angular/core';

@Directive({
  selector: '[appStructDirTest]'
})
export class StructDirTestDirective implements OnInit {

  constructor(private viewRef:ViewContainerRef,private tempRef:TemplateRef<any>,private render2:Renderer2) { }
  ngOnInit(): void {
    
   let p=this.render2.createElement("p");
   let text=this.render2.createText("this is a test");
   this.render2.appendChild(p,text);
  // this.render2.appendChild(this.tempRef.elementRef.nativeElement,p)
  //  this.render2.appendChild(this.viewRef,p)
    this.viewRef.createEmbeddedView(this.tempRef);
    this.viewRef.createEmbeddedView(this.tempRef);
    this.viewRef.createEmbeddedView(this.tempRef);
  }
}
