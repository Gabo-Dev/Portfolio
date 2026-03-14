import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.model';
import { PROJECTS_DATA } from '../constants/projects-data';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly _projects = signal<Project[]>(PROJECTS_DATA);
  
  readonly projects = this._projects.asReadonly();

  getProjectById(id: string): Project | undefined {
    return this._projects().find((project) => project.id === id);
  }
}
