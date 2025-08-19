import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ScrollAnimationService } from '../../../../core/services/scroll-animation.service';
import { delay } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [
    trigger('fadeInScale', [
      state('visible', style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.8)'
        }),
        animate('0.6s ease-out')
      ])
    ]),
    trigger('slideInUp', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(30px)'
        }),
        animate('0.8s 0.2s ease-out')
      ])
    ]),
    trigger('fadeInUp', [
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'
        }),
        animate('0.6s 0.4s ease-out')
      ])
    ]),
    trigger('floatingParticle', [
      transition('* => *', [
        animate('6s ease-in-out', keyframes([
          style({ transform: 'translateY(0px)', offset: 0 }),
          style({ transform: 'translateY(-20px)', offset: 0.5 }),
          style({ transform: 'translateY(0px)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class HeroComponent implements OnInit {
  private readonly _ScrollAnimationService = inject(ScrollAnimationService);
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  particles: any[] = [];
  stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '99%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' }
  ];
  ngOnInit(): void {
    this.generateParticles();
    setTimeout(() => {
      this._ScrollAnimationService.observeElements();
    }, 100);
  }
  generateParticles(): void {
    if (!isPlatformBrowser(this._PLATFORM_ID)) return
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        delay: Math.random() * 5
      })
    }
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
}
