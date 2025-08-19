import { NgClass } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { LucideAngularModule, Mail, Phone, MapPinHouse, Linkedin, Twitter, Instagram, Github } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, NgClass],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isUnderHeroSection = signal<boolean>(false);
  socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin
    },
    {
      name: 'Twitter',
      icon: Twitter
    },
    {
      name: 'Instagram',
      icon: Instagram
    },
    {
      name: 'GitHub',
      icon: Github
    }
  ];
  quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];
  services = [
    'Web Development',
    'Mobile Apps',
    'Cloud Solutions',
    'Digital Marketing',
    'Consulting',
    'Support Services'
  ];
  contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@yourbusiness.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri 9AM-6PM'
    },
    {
      icon: MapPinHouse,
      title: 'Office',
      value: '123 Business Ave, Suite 100',
      subtitle: 'New York, NY 10001'
    }
  ];
  legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Sitemap'
  ];
  smoothScroll(event: Event, targetId: string) {
    event.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  @HostListener('window:scroll', [])
  underHeroSection() {
    const homeEl = document.getElementById('home');
    if (homeEl) {
      const offsetTop = homeEl.offsetHeight;
      const scrollY = window.scrollY;
      this.isUnderHeroSection.set(scrollY > offsetTop);
    }


  }

}
