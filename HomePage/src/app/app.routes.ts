import { GallerieComponent } from './gallerie/gallerie.component';
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  { path: '', component: GallerieComponent },
  { path: 'gallerie', component: GallerieComponent },
  { path: 'test',      component: GallerieComponent },
];

