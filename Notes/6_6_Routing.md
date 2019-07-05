Outsourcing Router module

In app-routing.module.ts

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
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

class AppRoutingModule{}
```

In app.module.ts

```
import { ... } from '...';
...
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    ...
    imports: [
        ...
        AppRoutingModule
        ...
    ]
    ...
})
```

-   Routing configuration is created as a separate module and loaded in app.module.ts
-   In AppRoutingModule,
    -   No need to add the component in the imports section. Since it is added in app.module.ts
    -   The property exports is used to say Angular what kind of functionality is been outsourced.