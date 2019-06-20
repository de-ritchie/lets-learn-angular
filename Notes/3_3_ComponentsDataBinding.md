Local References in Template

<input type = "text" #serverNameInput>
<button (click) = 'addServer(serverNameInput)'>Add Server</button>
-   It can be placed on any HTML element not only on input element.
-   Add with a '#' tag
-   #serverNameInput will hold the reference to the element. That is not the value but the whole HTML element with all it's properties.
-   How to capture the reference in typescript code ?
    Hence pass the reference on an event binding.

@ViewChild

-   In the above we're passing the reference via a function to get the template details.
-   But somethimes when we want to access the reference before we go to the method.
-   Decorator @ViewChild is used to achieve this technique.

template.component.html
<input type = "text" #serverNameInput>
<input type = "text" #serverDescInput>

template.component.ts
@Component({ ... })
export class Template{
    ...
    @ViewChild('serverNameInput) serverNameInput;
    ...
}

-   @ViewChild takes a parameter of a local reference or a component's name.
-   @ViewChild('...') is of type ElementRef.
-   ElementRef has a useful property to use the native element property to access the value of the element etc.

ngContent
<server-element [prop] = 'property'>
    <div *ngIf = 'prop.status'>
        ...
    </div>
</server-element>
- By default content written b/w a custom component will not get displayed.
- But to display it the component's template should've ng-content directive.
-   server.element.component.html
    <div>
        ...
    </div>
    <ng-content></ng-content>
-   The content which was present in b/w invocation of component will be available in the place of ng-content.