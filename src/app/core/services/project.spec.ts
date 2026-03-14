import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { ProjectService } from './project.service';
import { PROJECTS_DATA } from '../constants/projects-data';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose projects as a readonly signal', () => {
    const projects = service.projects();
    expect(Array.isArray(projects)).toBe(true);
    expect(projects).toEqual(PROJECTS_DATA);
  });

  it('should find a project by id', () => {
    const targetProject = PROJECTS_DATA[0];
    const found = service.getProjectById(targetProject.id);
    expect(found).toEqual(targetProject);
  });

  it('should return undefined for a non-existent project id', () => {
    const found = service.getProjectById('non-existent');
    expect(found).toBeUndefined();
  });
});
