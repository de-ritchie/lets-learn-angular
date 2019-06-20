Directives
-   These are instructions in the DOM
-   Components are kind of such intructions in the DOM. Once we add selector to the component configuration we instruct angular to add the template where it finds the selector and include the business logic too.
-   But directives are more template oriented.

Inbuilt directives
-   *ngIf
    -   <p *ngIf = 'flag'>Server was created</p>
    -   It is a Structural directive which means it changes the structure of DOM
    -   It either add the element or it doesn't
    -   Else condition for *ngIf
        <p *ngIf = 'flag; else noServer' >Server was created</p>
        <ng-template #noServer><p>No Server was created</p></ng-template>
-   ngStyle
    -   <p [ngStyle] = "{backgroundColor: getColor()}">
    -   getColor(){ if... return 'green' else 'red'}
-   ngClass
    -   <p [ngClass] = '{online: serverStatus == "online"}'>
    -   Allows to dynamically to create or modify classes.
    -   The configuration will be a JS object with key as class name and value boolean.
    -   Boolean because to apply CSS class properties or not.
-   *ngFor
    -   <app-server *ngFor = 'let server of servers; let i = index'></app-server>
    -   Iterate through each and every element in an array and assign each to dynamic server variable.
    -   To get index of each iteration, index key word is assigned to a temporary variable.
-   ngSwitch & *ngSwitchCase
    -   <div [ngSwitch] = "value">
                <p *ngSwitchCase = "1">1</p>
                <p *ngSwitchCase = "2">2</p>
                <p *ngSwitchCase = "3">3</p>
                <p *ngSwitchDefault>0</p>
        </div>
Note
-   Unless structural directives, attribute directives don't add or remove elements.
-   They change the element they were placed on.