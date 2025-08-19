import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
  observeElements(): void {
    if (!isPlatformBrowser(this._PLATFORM_ID)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry) {
            entry.target.classList.add('visible');
          }
        })
      }
      , {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
  }

}
