Predefined & Custom directives

Different type of Predefined directives
-   Attribute
    -   They sit on elements just like an attribute(possibly by data or event binding).
    -   Element doesn't get destroyed only the property of the element gets changed.
    -   More than one structural direcive is allowed in same element.
    -   ngStyle, ngClass

-   Structural
    -   They are similar to Attribute(have a leading *) but also change the structure of DOM.
    -   Element get created/destroyed in other words it affects the view of the DOM.
    -   More than one structural direcive is not allowed in same element.
    -   *ngFor, *ngIf

Custom directives

import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasic]'
})

export class BasicDirective implements onInit{
    
    constructor(private elementRef: ElementRef){}
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
-   Attribute directive
    -   Create any-name.directive.ts
    -   It consits of decorator @Directive with configuration and a class.
    -   @Directive configuration
        -   selector
            -   A unique selector.
            -   Camel case is used.
            -   To select by element => selector: "appBasic"
            -   To select by attribute => selector: "[appBasic]"
    -   We also need to know about the current element if an attribute selector is used.
    -   Angular allows to get this by injecting the element in the constructor of the class.
    -   Just like components we've to inform Angular that we've a new directive.
    -   In app.module.ts
        import { BasicDirective } from '...';
        @NgModule({
            declarations: [
                AppComponent,
                ...
                BasicDirective
            ],
            ...
        })
    -   Usage in HTML, The paragraph tag alone will get highlighted in green
        <div>
            ...
            <p appBasic>...</p>
            ...
        </div>