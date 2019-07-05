Passing parameters to routes

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
        path: 'users/:id',
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

-   We've to configure the path with dynamic parameter in appRoutes of app.module.ts
-   path: 'users/:id/:name'
    -   Now we configured a path with dynamic parameter.
    -   ":id" is the dynamic parameter

How to access the path parameter

in Component

```
import { ... } from '...';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({...})

export class HomeComponent OnInit, OnDestroy{

    paramSubscription: Subscription

    constructor(private route: ActivatedRoute){}

    ngOninit(){
        ...
        this.user.id = this.route.snapshot.params['id'];
        this.user.name = this.route.snapshot.params['name'];
        ...
        this.paramSubscription = this.route.params
        .subscribe( params: Params => {
            this.user.id = params['id'];
            this.user.name = params['name'];
        })
    }

    ngOnDestroy(){
        this.paramSubscription.unsubscribe();
    }
}
```

in HTML

```
<p>User ID {{user.id}}</p>
<p>User Name {{user.name}}</p>
<hr>
<a [routerLink] = "['/users', 10, 'Max']">Load Max</a>
```

-   Using ActivatedRoute with the method snapshot we can retrieve the parameter values from URL
-   But this approach doesn't work in all circumstances.
-   When we are in a URL of "/users/1/Anna" and the component retrieved is Users component.
    -   The component would've recieved the inputs of URL parameters using snapshot.
    -   When we click the link "Load Max" the URL will get updated but the User ID & name wll not change.
    -   Because Angular behaves in such a way that when a URL is loaded
        -   It loads the component w.r.t URL as per configuration in app.module and initiates component.
        -   But this happens if we're not on this link before.
        -   So angular doesn't re-render the component if we are already on.
        -   Which is a best efficiency practice.
    -   It is fine to use snaphot method on initiation.
    -   But on subsequent changes we are unaware when the URL will change.
    -   Hence the ActivatedRoute object has a property called as params which is of type observable.
    -   The observable is then subscribed in such a way that when the URL param gets changed it'll get observed automatically without the code getting blocked.
    -   And the subscriptions can be unsubscribed when the component gets destroyed.
    -   IT IS A BEST PRACTICE TO UNSUBSCIRBE THE SUBSCRIBED OBJECTS WHEN A COMPONENT GET'S DESTROYED.