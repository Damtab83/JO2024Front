import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'management-dashboard-admin/custom/:id',
    renderMode: RenderMode.Server, // ✅ valeur correcte
  },
];
