import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CGV } from './components/cgv/cgv';
import { MentionsLegales } from './components/mentions-legales/mentions-legales';
import { Achats } from './components/achats/achats';
import { Login } from './components/login/login';
import { Signin } from './components/signin/signin';
import { CustomAdmin } from './components/custom-admin/custom-admin';
import { ManagementDashboardAdmin } from './components/admin/management-dashboard-admin/management-dashboard-admin';
import { ManagementDashboardAdminCustom } from './components/admin/management-dashboard-admin-custom/management-dashboard-admin-custom';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'cgv', component: CGV },
  { path: 'login', component: Login },
  { path: 'signin', component: Signin },
  { path: 'achats', component: Achats },
  { path: 'custom-admin', component: CustomAdmin },
  {
    path: 'management-dashboard-admin',
    component: ManagementDashboardAdmin,
    children: [{ path: 'custom/:id', component: ManagementDashboardAdminCustom }],
  },
  { path: 'mentions-legales', component: MentionsLegales },
  {
    path: '**',
    component: NotFound,
  },
];
