import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CGV } from './components/cgv/cgv';
import { MentionsLegales } from './components/mentions-legales/mentions-legales';
import { Achats } from './components/achats/achats';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'cgv', component: CGV },
  { path: 'achats', component: Achats },
  { path: 'mentions-legales', component: MentionsLegales },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
