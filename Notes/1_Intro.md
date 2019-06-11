Angular
-   Angular is a JavaScript Framework
-   Used to create Single-Page Applications(SPAs)
-   It allows us to mix static HTML code and dynamic things.
-   In simple words, it is a JS framework, changing the DOM at runtime.

SPA 
-   It is only one HTML file and a bunch of JS codes that we got from the server.
-   Each and every time when an option or new page or tab is clicked the browser doesn't spins
-   It is the only the current DOM which gets modified accordingly

Angular Commands

*   Create an angular project
    $ ng new my-first-app
    => Would you like to add Angular routing ? => no
    => Which Stylesheet format would you like to use ? => CSS
*   To bring up a development server to view the application in Web App
    $ ng serve

Angular Project
-   package.json => Dependency file
    dependencies => Has a list of packages that needs to run the web application
    devDependencies => Packages needed only for development
-   e2e => End to End Testing

App module
-   Place where we configure which belongs to the App
-   Imports => to imports other package from Angular/other packages.
    imports: [BrowserModule, FormsModule]
