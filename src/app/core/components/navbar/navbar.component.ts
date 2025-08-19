import { Component, HostListener, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('mobileMenu', [
      state('closed', style({
        opacity: 0,
        transform: 'translateY(-10px)'
      })),
      state('open', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('closed <=> open', animate('200ms ease-in-out'))
    ]),
    trigger('menuIconRotate', [
      state('closed', style({})),
      state('open', style({})),
      transition('closed => open', []),
      transition('open => closed', []),
    ])
  ]
})
export class NavbarComponent implements OnInit {
  _PLATFORM_ID = inject(PLATFORM_ID);
  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);
  activeSection = signal<string>('home');

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 100);
    this.updateActiveSection();
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.isMobileMenuOpen.set(window.innerWidth >= 768);
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this._PLATFORM_ID)) return
    this.updateActiveSection();

  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(prev => !prev);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }

  smoothScroll(event: Event, targetId: string) {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  private updateActiveSection() {
    const sections = this.navItems.map(item => item.id);
    const scrollPosition = window.scrollY + 100;
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }
}
