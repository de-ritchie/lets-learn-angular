Protecting Child Routes with CanActivateChild

In auth-guard.service.ts

```
import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivateRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(authService: AuthService, router: Router){}

    canActivate(route: ActivateRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isAuthenticated()
        .then((authenticated: boolean) => {
            if(authenticated){
                return true;
            } else{
                this.router.navigate(['/']);
            }
        });
    }
    canActivateChild(route: ActivateRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate();
    }
}
```

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
        canActivateChild: [AuthGuardService],
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

-   An auth-guard.service.ts file is created and it implements CanActivateChild interface.
-   The CanActivateChild implementation will force to have the method canActivateChild.
-   canActivateChild method has 2 parameters
    -   ActivateRouteSnapshot
    -   RouterStateSnapshot
-   canActivateChild can run either Async or sync.
-   canActivateChild has method returns either
    -   Observable```<boolean>```
    -   Promise```<boolean>```
    -   or boolean
-   Finally the routes with children which needs to be protected has to be configured in the array of routes.
-   In the example, the root route is not protected but the child routes are protected.