ngOnInit

Component Lifecycle
-   Once a new component is created by angular, it goes through different phases.
-   In these phases, it'll give a chance to hook into the phases and execute custom code.
    -   ngOnChanges
        -   It is executed multiple times like when component is created.
        -   Then Called after a bound input property changes. That is properties decorated with '@' input.
    -   ngOnInit
        -   Called once the component is intialized.
        -   It doesn't mean that we can see it has not been added to DOM yet.
        -   But it got initialized and the properties can be accessed.
        -   It'll run after the constructor.
    -   ngDoCheck
        - This will get executed multiple times.
        -   Called during every change detection run.
        -   Whenever a property value gets changed in a template.
    -   ngAfterContentInit
        -   Called after content(ng-content) has been projected into view.
    -   ngAfterContentChecked
        -   Called everytime the projected content has been checked.
    -   ngAfterViewInit
        -   Called after the component's view (and all child views) has been initialized.
    -   ngAfterViewChecked
        -   Called every time the view (and child views) have been checked.
    -   ngOnDestroy
        -   Called once the component is about to get destroyed.
