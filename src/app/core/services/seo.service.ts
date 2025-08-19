import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly _Meta = inject(Meta)
  private readonly _Title = inject(Title)
  updateTitle(title: string): void {
    this._Title.setTitle(title);
  }
  updateMetaTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
  }): void {
    if (config.title) {
      this.updateTitle(config.title);
      this._Meta.updateTag({ property: 'og:title', content: config.title });
    }
    if (config.description) {
      this._Meta.updateTag({ property: 'description', content: config.description });
      this._Meta.updateTag({ property: 'og:description', content: config.description });
    }
    if (config.keywords) {
      this._Meta.updateTag({ property: 'keywords', content: config.keywords });
    }
    if (config.image) {
      this._Meta.updateTag({ property: 'og:image', content: config.image })
    }

  }
}
