import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { provideCloudinaryLoader } from '@angular/common';
import { ProfileCardComponent } from './profile-card.component';

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProfileCardComponent],
      providers: [provideCloudinaryLoader('https://res.cloudinary.com/da1lxmeng')],
    });
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    fixture.componentRef.setInput('photoSrc', 'v1773229104/fotoPerfil_dryi8z.png');
    fixture.componentRef.setInput('name', 'Jonathan');
    fixture.componentRef.setInput('role', 'Developer');
    fixture.componentRef.setInput('description', 'Bio');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render name, role and description', () => {
    fixture.componentRef.setInput('photoSrc', 'v1773229104/fotoPerfil_dryi8z.png');
    fixture.componentRef.setInput('name', 'Jonathan Orna');
    fixture.componentRef.setInput('role', 'Frontend Developer');
    fixture.componentRef.setInput('description', 'Passionate about clean code.');
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.profile-name')?.textContent).toContain('Jonathan Orna');
    expect(fixture.nativeElement.querySelector('.profile-role')?.textContent).toContain('Frontend Developer');
    expect(fixture.nativeElement.querySelector('.profile-description')?.textContent).toContain('Passionate about clean code.');
  });

  it('should show active status dot when statusActive is true', () => {
    fixture.componentRef.setInput('photoSrc', 'v1773229104/fotoPerfil_dryi8z.png');
    fixture.componentRef.setInput('name', 'Jonathan');
    fixture.componentRef.setInput('role', 'Dev');
    fixture.componentRef.setInput('description', 'Bio');
    fixture.componentRef.setInput('statusActive', true);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.status-dot--active')).toBeTruthy();
  });

  it('should show inactive status dot when statusActive is false', () => {
    fixture.componentRef.setInput('photoSrc', 'v1773229104/fotoPerfil_dryi8z.png');
    fixture.componentRef.setInput('name', 'Jonathan');
    fixture.componentRef.setInput('role', 'Dev');
    fixture.componentRef.setInput('description', 'Bio');
    fixture.componentRef.setInput('statusActive', false);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.status-dot--inactive')).toBeTruthy();
  });
});
