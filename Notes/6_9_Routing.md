CanDeactivate

-   The control of whether persson wants to leave a route or not
-   Example 
    -   When we edit some details and if the user suddenly clicks on another navigation. 
    -   The user has to be prompted that if leaves the unsaved details will be lost.
    -   Thus either he can stay or proceed to next page.
-   In the example so when user tries to move away from the route we'll be asking for confirmation.
-   So this can be done when we've the control over the route when someone leaves that route.

can-deactivate-guard-service.ts

```
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

Injectable()
class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>{
    
    canDeactivate(component: CanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{
        return component.canDeactivate()
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
                component: 'EditServerComponent',
                canDeactivate: ['CanDeactivateGuardService']
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

In edit-server.component.ts

```
import { ... } from '...';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({...})

export class EditServerComponent OnInit, CanComponentDeactivate{

    paramSubscription: Subscription

    constructor(private route: ActivatedRoute, private router: Router){}

    ngOninit(){
        ...
    }
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {

        if(!this.allowEdit){
            return true;
        } else{
            if(this.isDocumentEdited && !this.isChangesSaved){
                return confirm('Do you want to discard the changes ?');
            }
        }
    }
}
```