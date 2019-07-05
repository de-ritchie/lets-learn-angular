Angular App getting loaded

- In index.html of source in browser will have a couple of js imports. These are injected by CLI automatically
- When the project is built, it will create bundles, js script bundles and add the right imports in index.html
- main.ts is the first file which gets executed.
    - ```platformBrowserDynamic().bootstrapModule(AppModule)``` 
    -   this method bootstraps angular application with app module by passing it to the method
- app.module.ts
    - bootstrap: ```[AppComponent]``
    - In this module we say angular, there is an app component when you start yourself.
- app.component.ts
    - selector: 'app-root'
    - Angular tries know this selector configuration.
    - Now Angular know this is the selector and it is able to handle the selector in index.html file.
    - From the configuration it tries to load the template of the component.

