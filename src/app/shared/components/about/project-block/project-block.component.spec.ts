import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ProjectBlockComponent } from './project-block.component';

describe('ProjectBlockComponent', () => {
  let component: ProjectBlockComponent;
  let fixture: ComponentFixture<ProjectBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [ProjectBlockComponent] });
    fixture = TestBed.createComponent(ProjectBlockComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.componentRef.setInput('name', 'Project');
    fixture.componentRef.setInput('description', 'Desc');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render name and description', () => {
    fixture.componentRef.setInput('name', 'Dashboard');
    fixture.componentRef.setInput('description', 'Admin panel');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.project-name')?.textContent).toContain('Dashboard');
    expect(fixture.nativeElement.querySelector('.project-description')?.textContent).toContain('Admin panel');
  });

  it('should render metric and tag when provided', () => {
    fixture.componentRef.setInput('name', 'App');
    fixture.componentRef.setInput('description', 'MVP');
    fixture.componentRef.setInput('metric', '+20%');
    fixture.componentRef.setInput('tag', 'MVP');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.project-metric')?.textContent).toContain('+20%');
    expect(fixture.nativeElement.querySelector('.project-tag')?.textContent).toContain('MVP');
  });

  it('should apply the high elevation class', () => {
    fixture.componentRef.setInput('name', 'App');
    fixture.componentRef.setInput('description', 'Desc');
    fixture.componentRef.setInput('elevation', 'high');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.elevation-high')).toBeTruthy();
  });
});
