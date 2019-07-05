Redirect & Wild card

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
        path: 'not-found',
        component: 'NotFoundComponent'
    },
    {
        path: '**',
        redirectTo: '/not-found'
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

-   When want to handle a 404 Page Not Found for any invalid URL.
-   Create a component with 404 template and create route for it.
-   Then using wild card any invalid URL can be redirected to not found URL using redirectTo property.
-   The wild card has to be kept in the last element in the array of routes.