Setting up child routes

In app.module.ts

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
    },
    {
        path: 'servers',
        component: 'ServersComponent',
        children: [
            {
                path: ':id',
                component: 'ServerComponent'
            },
            {
                path: ':id/edit',
                component: 'EditServerComponent'
            }
        ]
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

In servers.component.html

```
<router-outlet></router-outlet>
```

-   Using children parameter, an array of child routes ca be mapped from the first route.
-   After configuring in app.module.ts, the component's template which has child routes, has to be configured once again with router-outlet.
-   That is ServersComponent's template should have router-outlet, to route for its child routes,
    -   ServerComponent
    -   EditServerComponent