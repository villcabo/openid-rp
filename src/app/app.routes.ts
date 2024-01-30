import { Routes } from '@angular/router';
import { DebugComponent } from './debug/debug.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'debug', component: DebugComponent },
];
