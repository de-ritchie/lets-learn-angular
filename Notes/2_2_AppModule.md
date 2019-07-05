App Module

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

-   Angular uses components to build pages whereas uses modules to bundle different pieces of components of your app into packages.
-   Used to split app into multiple modules for a larger project.
-   It is similar to component with a typescript class. But has a decorator ```'@NgModule'``` which imported from angular core
-   Properties
    -   bootstrap
        -   It is responsible for telling angular which component it has to be aware of when the whole application starts.
        -   That is which file has to be recognized in whole index.html
    -   declarations
        -   New upcoming components has to be registered into modules.
        -   By default angular will not scan all the files .
        -   So angular should know that some components exists, those components has to be registed in NgModule declarations array.
        -   to complete this that component has to be imported.
    -   imports
        -   Allows to add other modules to this modules.
        -   This helps when want split up and create multiple modules to make the current module leaner.
        -   By default BrowserModule is imported to get the base functions to start the app.