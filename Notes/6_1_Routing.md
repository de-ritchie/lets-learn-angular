Navigating Programmatically

```
import { ... } from '...';
import { Router,ActivatedRoute } from '@angular/router';

@Component({...})

export classs HomeComponent{

    constructor(private router: Router, private route: ActivatedRoute){}

    ngOninit(){
        this.router.navigate(['/server'], {
            relativeTo: this.route,
            queryParams: {
                id: 10
            },
            queryparamsHandling: "preserve"
        })
    }
}
```

-   The Router service helps with navigate method where we can route to a particular path.
-   But navigate method doesn't work exactly like routerLink where we can specify relative/absolute path.
-   RouterLink always know in which component's template it sits and what currently loaded route.
-   But for navigate it doesn't work in the same way.
-   To inform that where it currently sits.
    -   A second parameter to navigate method as object.
        -   relativeTo property helps in telling where to route from the configured route.
        -   queryParams property's value is an object, where key is query param name and value is query param value.
        -   queryparamsHandling property helps in either to preserve/merge query params when we route from one to another
            -   preserve, is used to preserve the query params when we route from one to another.
            -   merge, is used to override previous query params with new ones. 
        -   fragment property's value is a string, where it states about the ```URL/user#value-of-fragment```.
    -   Where we can configure Navigation action.