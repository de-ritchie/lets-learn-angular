What is a Service ?

-   Service is another piece or class in Angular app.
-   Which can have common business logics in other words acts a centeral repository/bussiness unit.
-   Where it can have a data storage or common function implementaions.
-   It helps in communicating b/w components.

In Service

```
export class LoggingService{
    logStatusChange(status: string){
        console.log('Server status is changed, new server status: '+ status);
    }
}
```

How to introduce service into Components ?

-   This is done by Angular's Dependency Injector.
-   Dependency is somthing the component class actually depends on service's method.
-   Thus the Dependency Injector just simply injects the dependency that is the instance of the Service class into our component automatically.
-   So Angular will be creating an instance for LoggingService in the component when it is defined as public/private with a vaiable and it's type in constructor argument at runtime.
-   We need to configure in such a way that this instance is created by angular at runtime.
-   We need to provide the service in component.
-   Configure in Component decorator with property name as providers and value as array of services.

In Component

```
import { LoggingService } from ' ... ';
@Component({ 
    ...
    providers: [LoggingService]
})
export class AccComponent{

    constructor(private loggingService: LoggingService){}
    onCreate(...){
        ...
        this.loggingService.logStatusChange(status);
        ...
    }
}
```

Hierarchical Injector
-   If we provide a service in some places in an app like Component1, the angular service knows to create an instance of service to this and all it child components.
-   AppModule
    -   If a service is is configured providers of AppModule.ts then that service will be available for the entire Application.
-   AppComponent
    -   Same instance of Service is available for all Components but not for other services.
-   Any other Component
    -   Same instance of Service is available for the Component and all its child components.

Injecting Services into Services
-   This cannot be done component level but can be configured in AppModule.ts
-   AppModule.ts 
    -   with provider configuration of Service is the Highest Injector in heirarchy of injectors.
    -   And it can help in injecting services in injectors.
-   So when we inject service into something, this something needs a metadata(decorator) attached to it.
-   Component, Directive has metadata of @Component & @Directive.
-   To inject service in a service we need attach a metadata called as Injectable(@Injectable).
-   When a service has @Injectable it means any service can be injected into that service.
-   Only add @Injectable to a service when a service needs to injected otherwise it can't be ignored.

In a Service

```
import { Injectable } from '@angular/core';
import { LoggingService } from ' ... ';

@Injectable()
export class AccountService{

    constructor(private loggingService: LoggingService){}
}
```