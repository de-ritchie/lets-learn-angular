Components
-   Key feature in Angular.
-   You build your whole application composing from a couple of components which you create on your own.
-   App/Root Component
        - It is where the whole application components reside.
        - It is where we nest or add other components.
        - Each components has their own templates, styling code and business logic.
        - A component can be resused more than once.

Breaking down Component

import { Component } from '@angular/core';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    ...
}

-   It is just a class, so angular can be able to instantiate it based on the objects that blue print was setup.
-   Export the class to use it outside the file too.
-   Now it is not only a normal typescript class. Hence we use decorators.
-   Decorators are used to enhance a class & elements. '@' is attached in fornt to denote it as decorator.
-   For components '@Component' is used.
-   But Typescript doesn't know about Component hence we've to import component from '@angular/core'.
-   Then JS object has to be sent to Component decorator to configure it so that which will become metadata for this class in the background which well tell what to do with this class to Angular.
-   Metadata
    -   selector
        -   It should be a string, unique selector(that shouldn't accidentally override the defalt HTML elements)
        -   Later this selector can be used in other HTML component files.
        -   Selector value adheres to CSS property of selecting like
            -   '[app-root]' => looks for attribute 'app-root' in any element.
            -   '.app-root' => Looks for class with value 'app-root'.
            -   Selecting by ID is not supported in angular.
            -   Selecting using psuedo selector (like a:hover) is not supported in angular.
    -   template/templateUrl
        -   It holds the template of HTML code to the corresponding component.
        -   Relative path is given to HTML file w.r.t the component
        -   Any HTMl code can be added in server.component.html file and given to templateUrl.
        -   Property template helps to write string value of HTML
            template : "<button>Submit</button>"
    -   styles/styleUrls
        -   styleUrls value is an array so that multiple style sheets can be referred.
        -   styles value is a an array of strings where a lot of CSS style are written.