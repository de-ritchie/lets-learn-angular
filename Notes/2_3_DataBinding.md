Data Binding
-   Communication b/w Typescript code and business logic
-   Output data on HTML from Typescript
    -   String Interpolation => {{ data }}
    -   Property Binding => ```[property] = "data"```
-   React to (User) events
    -   Event Binding => ```(event) = "expression"```
-   Combination of both - 2 way data binding => ```[(NgModel)] = "data"```

String Interpolation
```{{ data }}, {{ "data" }}, {{ 1 + 1 }}, {{ getStatus() }}```
-   It can contain an expression that finally gets converted to a string.
-   Component's variable value, just a string, an expression, ternary can be written. But not if/else.
-   But multiline expression cannot be written in string interpolation.

Event Binding
-   Used to get the actions performed on template to component
-   In template, ```<button (click) = 'updateStatus($event)'>Add</button>```
-   In component, ```updateStatus(event: Event) { ... }```
-   $event
    -   It is a reserved variable name. Can be used in template when using for event binding.
    -   It is a data emitted with event. Like click event gives the coordinates where it was clicked.

Two way data binding
-   We combine property and event binding.
-   ```<input type = "text" [(NgModel)] = "serverName">```
-   NgModel is a directive which helps in achieving the 2 way binding.