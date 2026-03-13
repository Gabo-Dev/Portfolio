import { Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { AboutComponent } from '@pages/about/about.component';
import { Contact } from '@pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
