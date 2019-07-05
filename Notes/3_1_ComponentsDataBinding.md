Binding to custom events

To send information from child to parent component

parent.component.ts
```
import ...
...
@Component({ ... })
export class Parent {
    serverElements: Server[] = [ ... ]
    ...
    onShutdown(){ ... }
    ...
}
```

parent.component.html
```
...
<child 
    *ngFor="let serverElement of serverElements" 
    [element] = "serverElement" 
    (shutdown) = "onShutdown($event)">
</child>
...
```

child.component.ts
```
import ...
...
@Component({ ... })
export class Child {
    @Input() element: Server;
    @Output() shutdown = new EventEmitter <Server>();
    ...
    shutdownEvent($event){
        ...
        this.shutdown.emit(element);
        ...
    }
}
```

child.component.html
```
<h1>Server status - {{element.status}}</h1>
<button *ngIf = "element.status" (click) = 'shutdownEvent($event)'>Shutdown</button>
```

-   Create custom components in which  parent expects input from child.
-   Each components property will not be exposed outside the component.
-   Explicitly property has to be allowed to access.
-   Decorator Output is used to achieve explicit implementation of accepting sending event from a child component
-   To achieve an alias name for a event binding, inside ```@Output("srvElement")``` is given and assigned to a different variable name.
    -   ```<child *ngFor="let serverElement of serverElements" (shutIt) = "onShutdown($event)"></child>```
    -   ```@Output("shutIt") shutdown: Server```