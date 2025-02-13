import { Routes } from '@angular/router';
import {showcaseRoutes} from './showcase/showcase.routes';

export const routes: Routes = [
    {
        path: 'showcase',
        children: showcaseRoutes
    }
];
