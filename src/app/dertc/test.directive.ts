import { Directive,ElementRef,Input,OnInit,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {
@Input("appTest")color:String;
  constructor(private elm:ElementRef,private render2:Renderer2) {
    this.color="";
   }

   ngOnInit(){
     
    // this.elm.nativeElement.innerHTML=`<h3>hellow world</h3>`
     let h1=this.render2.createElement("h1");
     let text=this.render2.createText("Hellow World");
     this.render2.setStyle(h1,"color",this.color);
      this.render2.appendChild(h1,text);
      this.render2.appendChild(this.elm.nativeElement,h1);
      console.log("data"+this.color);
   }
   @HostListener("mouseenter",["$event"])
   onMouseEnter(event:any){
     this.elm.nativeElement.innerHTML=`<h5>mouse enter</h5>`
   }
   @HostListener("mouseleave")
   onMouseLeave(){
    this.elm.nativeElement.innerHTML=`<h5 style="color:blue">mouse Leave</h5>`
   }

}
