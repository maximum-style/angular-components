import {Routes} from "@angular/router";
import {ExampleShowcaseComponent} from "./example-showcase/example-showcase.component";
import {Example2ShowcaseComponent} from "./example2-showcase/example2-showcase.component";

export const showcaseRoutes: Routes = [
    {
        path: 'example',
        component: ExampleShowcaseComponent
    },
    {
        path: 'example2',
        component: Example2ShowcaseComponent
    }
]
