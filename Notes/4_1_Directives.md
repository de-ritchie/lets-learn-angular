-   In Angular it is not a good practice to directly access the elements. 
-   That is by using elementRef of type ElementRef and elementRef.nativeElement property.
-   The better way to do is use Renderer.

Create a directive by command 
    ```$ ng g d any-name```

```
import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appAnyName]'
})

export class AppAnyName implements onInit{
    
    @HostBinding('style.color') color: string = 'black';

    constructor(private elementRef: ElementRef, private renderer: Renderer2){}
    ngOnInit(){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false);
    }
    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent', false);
        @HostBinding('style.color') color: string = 'red';
    }
    @HostListener('mouseenter') mouseover(eventData: Event){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue', false);
    }
}
```

-   In this.renderer.setStyle parameters
    -   Element reference
    -   style name
    -   style value
    -   !important override flag
-   Now the style has to be applied only when we hover over it.
-   That we should react to some events occurring on the element that the directive sits on.
-   To achieve this a decorator known as @HostListener() is used.
-   Where the event name has to be specified in @HostListener as parameter followed by a function that executes when that event occurrs.
-   @HostBinding
    -   used to work with an element inside of a directive.
    -   used to bind any property where the element is sitting on.
    -   A property can be passed as parameter so that to which property of the hosting element we want to bind. 
