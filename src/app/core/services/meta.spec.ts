import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { MetaService, PageMeta } from './meta.service';

describe('MetaService', () => {
  let service: MetaService;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);

    vi.spyOn(titleService, 'setTitle');
    vi.spyOn(metaService, 'updateTag');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set default title and meta when calling updateMetaTags with empty object', () => {
    service.updateMetaTags({});

    expect(titleService.setTitle).toHaveBeenCalledWith(
      'Jonathan Orna - Frontend Developer Portfolio'
    );
    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'description',
      content:
        'Portfolio de Jonathan Orna, Frontend Developer especializado en Angular, React y TypeScript.',
    });
  });

  it('should override title when provided', () => {
    service.updateMetaTags({ title: 'Custom Page Title' });

    expect(titleService.setTitle).toHaveBeenCalledWith('Custom Page Title');
  });

  it('should override description when provided', () => {
    service.updateMetaTags({ description: 'Custom description' });

    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'description',
      content: 'Custom description',
    });
  });

  it('should use ogTitle for OG and Twitter tags when provided', () => {
    service.updateMetaTags({
      title: 'Page Title',
      ogTitle: 'Social Title',
    });

    expect(metaService.updateTag).toHaveBeenCalledWith({
      property: 'og:title',
      content: 'Social Title',
    });
    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'twitter:title',
      content: 'Social Title',
    });
  });

  it('should fall back to title for OG tags when ogTitle is not provided', () => {
    service.updateMetaTags({ title: 'Page Title' });

    expect(metaService.updateTag).toHaveBeenCalledWith({
      property: 'og:title',
      content: 'Page Title',
    });
    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'twitter:title',
      content: 'Page Title',
    });
  });

  it('should update og:image and twitter:image when ogImage is provided', () => {
    const imageUrl = 'https://example.com/image.png';
    service.updateMetaTags({ ogImage: imageUrl });

    expect(metaService.updateTag).toHaveBeenCalledWith({
      property: 'og:image',
      content: imageUrl,
    });
    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'twitter:image',
      content: imageUrl,
    });
  });

  it('should use default ogImage when not explicitly provided', () => {
    service.updateMetaTags({});

    expect(metaService.updateTag).toHaveBeenCalledWith({
      property: 'og:image',
      content:
        'https://res.cloudinary.com/da1lxmeng/image/upload/v1773229104/fotoPerfil_dryi8z.png',
    });
  });

  it('should reset all tags to defaults when resetToDefault is called', () => {
    service.updateMetaTags({
      title: 'Custom',
      description: 'Custom desc',
    });
    vi.mocked(titleService.setTitle).mockClear();
    vi.mocked(metaService.updateTag).mockClear();

    service.resetToDefault();

    expect(titleService.setTitle).toHaveBeenCalledWith(
      'Jonathan Orna - Frontend Developer Portfolio'
    );
    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'description',
      content:
        'Portfolio de Jonathan Orna, Frontend Developer especializado en Angular, React y TypeScript.',
    });
  });

  it('should update all 7 meta tags on each call', () => {
    service.updateMetaTags({});

    const updateCalls = vi.mocked(metaService.updateTag).mock.calls;
    expect(updateCalls.length).toBe(7);

    const tagKeys = updateCalls.map(
      (call) =>
        (call[0] as Record<string, string>)['name'] ||
        (call[0] as Record<string, string>)['property']
    );
    expect(tagKeys).toContain('description');
    expect(tagKeys).toContain('og:title');
    expect(tagKeys).toContain('og:description');
    expect(tagKeys).toContain('og:image');
    expect(tagKeys).toContain('twitter:title');
    expect(tagKeys).toContain('twitter:description');
    expect(tagKeys).toContain('twitter:image');
  });
});
