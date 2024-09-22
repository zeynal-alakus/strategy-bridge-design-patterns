import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'strategy', loadChildren: () => import('./strategy/strategy.routes').then(r => r.routes)},
  {path: 'bridge', loadChildren: () => import('./bridge/bridge.routes').then(r => r.routes)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
