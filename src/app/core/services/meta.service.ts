import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface PageMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  private readonly defaultMeta: PageMeta = {
    title: 'Jonathan Orna - Frontend Developer Portfolio',
    description: 'Portfolio de Jonathan Orna, Frontend Developer especializado en Angular, React y TypeScript.',
    ogImage: 'https://res.cloudinary.com/da1lxmeng/image/upload/v1773229104/fotoPerfil_dryi8z.png'
  };

  updateMetaTags(meta: Partial<PageMeta>): void {
    const finalMeta = { ...this.defaultMeta, ...meta };

    this.titleService.setTitle(finalMeta.title);

    this.metaService.updateTag({ name: 'description', content: finalMeta.description });

    this.metaService.updateTag({ property: 'og:title', content: finalMeta.ogTitle || finalMeta.title });
    this.metaService.updateTag({ property: 'og:description', content: finalMeta.ogDescription || finalMeta.description });
    
    if (finalMeta.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: finalMeta.ogImage });
    }

    this.metaService.updateTag({ name: 'twitter:title', content: finalMeta.ogTitle || finalMeta.title });
    this.metaService.updateTag({ name: 'twitter:description', content: finalMeta.ogDescription || finalMeta.description });
    
    if (finalMeta.ogImage) {
      this.metaService.updateTag({ name: 'twitter:image', content: finalMeta.ogImage });
    }
  }

  resetToDefault(): void {
    this.updateMetaTags(this.defaultMeta);
  }
}
