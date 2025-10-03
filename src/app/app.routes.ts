import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CGV } from './components/cgv/cgv';
import { MentionsLegales } from './components/mentions-legales/mentions-legales';
import { Achats } from './components/achats/achats';
import { Login } from './components/login/login';
import { Signin } from './components/signin/signin';
import { CustomAdmin } from './components/custom-admin/custom-admin';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'cgv', component: CGV },
  { path: 'login', component: Login },
  { path: 'signin', component: Signin },
  { path: 'achats', component: Achats },
  { path: 'custom-admin', component: CustomAdmin },
  { path: 'mentions-legales', component: MentionsLegales },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
