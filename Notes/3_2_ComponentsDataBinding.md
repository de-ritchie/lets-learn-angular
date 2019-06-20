View Children

-   When a CSS styling is applied to a particular component the child components will not get affected.
-   Angular kind of emulates the shadow DOM technique.
-   <p _ngcontent-ejo-2>...</p>
-   Each and every elements has strange attributes which is called as style encapsulation.
-   Angular gives unique attribute names to each and every component's elements.

How to override the style encapsulation ?

@Component({
    ...
    encapsulation: ViewEncapsulation.NONE
    ...
})

-    ViewEncapsulation.NONE
    -   When a component is configured in such a way then, we can't see the style attribute which is added by angular.

-   ViewEncapsulation.NATIVE
    -   It uses the shadow DOM technique
-   ViewEncapsulation.EMULATED
    -   It is default configuration.
    -   Only the respective component's CSS will be applied.
