Routing

-   What if we want to have a page that actually displays several pages.
-   Like ```http://mywebsite.domain/account/users```
-   To achieve this it might look like we need several HTML pages. But actually we don't need.
-   Angular has own router which allows to change the URL in URL bar.
-   But still uses only one page by exchanging major parts of that page.
-   To users it looks like new page was loaded but behind the scenes it is JS changing the lot of parts.

Routes are created and has to be registered in app.module.ts

```
import { ... } from '...';
...
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        component: 'HomeComponent'
    },
    {
        path: 'users',
        component: 'UsersComponent'
    }
]

@NgModule({
    ...
    imports: [
        ...
        RouterModule.forRoot(appRoutes)
        ...
    ]
    ...
})
```

-   The configuration which is done in app.module.ts should've array of type Routes.
-   Each route is an object with properties
    - path
        -   It describes the URL path
        -   Eg. path: 'users' mean ```http://mywebsite.domain/users```
    - component
        -   It is the action which takes place when this route is reached.
        -   Means that certain component's page will be loaded when certain route is reached
-   Next the routes has to be registered to RouterModule.
-   Finally have to inform angular so that the components are rendered w.r.t. routes.
-   In the HTML page 
    ```
    ...
    <router-outlet></router-outlet>
    ...

    ```
How to switch the routes ?

-   After configuring the routes, now Angular will be able to understand and route it.
-   But how to navigate b/w the routes ?
-   If we try to use``` <a href="/user">User</a>```
    -   Then it'll render the correctly mapped component.
    -   But the entire application will reload.
    -   Hence this approach will not be a correct way.
-   Thus routerLink helps in achieving the navigation of routing.
    -   ```<a routerLiink = "/">```
    -   ```<a [routerLink] = "['/users']">```
    -   ```<a [routerLink] = "['../servers']">```
    -   The routerLink can be directly configured to a route
    -   Or using property binding.
    -   In routerLink if it is configured
        -   with '/' then it means it is absolete path.
        -   without '/' it becomes relevant path. That is, it tries to navigate from the current URL path.
        -   with '../' it means that it'll move from the current route to previous node but removes currently loaded segment.
            -   Eg. ```http://mywebsite.domain/servers/1```
            -   ```<a [routerLink] = "['../xyz']">```
            -   Now the new navagation will be ```http://mywebsite.domain/```
    -   The directive routerLinkActive is used for CSS to point which path of the feature is active
    -   In HTML
        ```
        <li routerLinkActive = "active" 
        [routerLinkActiveOptions] = "{exact: true}">
            <a routerLink = "/">Home</a>
        </li>
        <li routerLinkActive = "active">
            <a routerLink = "/servers">Servers</a>
        </li>
        <li routerLinkActive = "active">
            <a routerLink = "/users">Users</a>
        </li>
        ```
    -   routerLink directive helps in activating the selected route by making the activating the active CSS class
    -   But the home navigation button will always be active eventhough when we click users navigation and if it is active too.
    -   This happens because "/" the homw navigation url path tends to match with the other 2 path.
    - To avoid this, an extra optional property is added to state matching of URL done with exact path.