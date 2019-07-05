Protecting Routes with CanActivate

In auth-guard.service.ts

```
import { Injectable } from '@angular/core';
import { CanActivate, ActivateRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate {

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
        canActivate: [AuthGuardService],
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

-   An auth-guard.service.ts file is created and it implements CanActivate interface.
-   The CanActivate implementation will force to have the method canActivate.
-   canActivate method has 2 parameters
    -   ActivateRouteSnapshot
    -   RouterStateSnapshot
-   canActivate can run either Async or sync.
-   canActivate has method returns either
    -   Observable```<boolean>```
    -   Promise```<boolean>```
    -   or boolean
-   Finally the routes which needs to be protected has to be configured in the array of routes.