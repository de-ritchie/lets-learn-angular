Components & Data binding Deep Dive

This is about Custom properties and custom  event bindings in custom components.

Binding to custom properties
To send information from parent to child component

parent.component.ts
import ...
...
@Component({ ... })
export class Parent {
    serverElements: Server[] = [ ... ]
    ...
}

parent.component.html
...
<child *ngFor="let serverElement of serverElements" [element] = "serverElement"></child>
...

child.component.ts
import ...
...
@Component({ ... })
export class Child {
    @Input() element: Server;
    ...
}

child.component.html
<h1>Server status - {{element.status}}</h1>


-   Create custom components in which child takes input
-   Each components property will not be exposed outside the component.
-   Explicitly property has to be allowed to access.
-   Decorator Input is used to achieve explicit implementation of accepting input from a parent component
-   To achieve an alias name for a property binding, inside @Input("srvElement") is given and assigned to a different variable name.
    -   <child *ngFor="let serverElement of serverElements" [srvElement] = "serverElement"></child>
    -   @Input("srvElement") element: Server