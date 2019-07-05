Passing Query Parameters & Fragments

URL: ```http://my-website.domain.users/10/Anna?allowEdit=1#loading```

Query Param
-   Things which comes after question marks("?").
-   They come in pairs like the key and value separated by "=".
-   allowEdit = 1

Fragments
-   Things which comes after hash("#").
-   They signify which section to move in a web page.

Query Param & Fragments in angular template

```
<a 
    [routerLink] = "['/xyz', 'edit']"
    [queryParams] = "{allowEdit: 1}"
    [fragment] = "loading"
>{{server.name}}</a>
```

Query Param & Fragments in angular programmatically

```
import { ... } from '...';
import { Router, ActivatedRoute } from '@angular/router';

@Component({...})

export classs HomeComponent{

    constructor(private router: Router, private route: ActivatedRoute){}

    onLoadServer(id){
        this.router.navigate(['/server', id, 'edit'], {
            queryParams: {
                allowEdit: 1
            },
            fragment: 'loading'
        })
    }
}
```

-   The ActivatedRoute object with navigate method takes parameter of URL and option.
-   In the option we can configure queryParams and fragment

Passing Query Parameters & Fragments

```
import { ... } from '...';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({...})

export classs HomeComponent OnInit, OnDestroy{

    ...
    paramSubscription: Subscription;

    constructor(private route: ActivatedRoute){}

    ngOninit(){
        ...
        this.user.id = this.route.snapshot.params['id'];
        this.user.name = this.route.snapshot.params['name'];
        this.queryParam = this.route.queryParams;
        this.fragment = this.route.fragment;
        ...
        this.paramSubscription = this.route.params
        .subscribe( params: Params => {
            this.user.id = params['id'];
            this.user.name = params['name'];
            this.queryParam = this.route.queryParams;
            this.fragment = this.route.fragment;
        })
    }

    ngOnDestroy(){
        this.paramSubscription.unsubscribe();
    }
}
```