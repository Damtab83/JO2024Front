import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';
import { CGV } from './components/cgv/cgv';
import { MentionsLegales } from './components/mentions-legales/mentions-legales';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home, pathMatch: 'full' },
  { path: 'cgv', component: CGV },
  { path: 'mentions-legales', component: MentionsLegales },
  { path: '**', component: NotFound },
];
