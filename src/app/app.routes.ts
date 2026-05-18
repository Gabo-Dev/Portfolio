import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('@pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('@pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('@pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('@pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('@pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];
