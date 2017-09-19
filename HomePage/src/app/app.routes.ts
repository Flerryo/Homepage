import { AcrylComponent } from './acryl/acryl.component';
import { AusstellungComponent } from './ausstellung/ausstellung.component';
import { BiographieComponent } from './biographie/biographie.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { HomeComponent } from './home/home.component';
import { MalereiComponent } from './malerei/malerei.component';
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  { path: '',             component: HomeComponent },
  { path: 'Home',         component: HomeComponent },
  { path: 'Gallerie',     component: GallerieComponent },
  { path: 'Malerei',      component: MalereiComponent },
  { path: 'Acryl',        component: AcrylComponent },
  { path: 'Biographie',   component: BiographieComponent },
  { path: 'Ausstellung',  component: AusstellungComponent },
];

