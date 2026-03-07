import { Routes } from '@angular/router';
import { Home } from '@app/home/home.component';
import { Projects } from '@pages/projects/projects.component';
import { About } from '@pages/about/about.component';
import { Contact } from '@pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'projects',
    component: Projects,
  },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
