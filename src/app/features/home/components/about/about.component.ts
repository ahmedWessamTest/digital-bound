import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ScrollAnimationService } from '../../../../core/services/scroll-animation.service';
import { LucideAngularModule, Rabbit, Shield, FlaskConical, Columns3Cog, Bolt, BrickWallShield } from 'lucide-angular';

@Component({
  selector: 'app-about',
  imports: [LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('slideInLeft', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-50px)'
        }),
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  private readonly _ScrollAnimationService = inject(ScrollAnimationService);
  animateSkills = signal<boolean>(false);
  keyPoints = [
    {
      icon: Rabbit,
      title: 'Lightning Fast',
      description: 'Optimized performance with cutting-edge technologies for maximum speed and efficiency.'
    },
    {
      icon: Shield,
      title: 'Proven Results',
      description: 'Track record of successful projects with measurable business impact and ROI.'
    },
    {
      icon: FlaskConical,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience in their respective fields.'
    }
  ];
  statistics = [
    { value: '55+', label: 'Pending Projects' },
    { value: '95+', label: 'Satisfied Clients' },
    { value: '10+', label: 'Success Partners' },
    { value: '999+', label: 'Creative Ideas' }
  ];
  skills = [
    { name: 'Web Development', level: 95 },
    { name: 'Mobile Apps', level: 90 },
    { name: 'Social Media', level: 88 },
    { name: 'SEO Optimization', level: 85 },
    { name: 'Influencer Marketing', level: 85 },
  ];
  features = [
    {
      icon: Columns3Cog,
      title: 'Customizable',
      description: 'Tailored solutions that perfectly fit your unique business requirements and goals.'
    },
    {
      icon: Bolt,
      title: 'User-Centered',
      description: 'Design and development focused on creating exceptional user experiences.'
    },
    {
      icon: BrickWallShield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability you can trust for your business.'
    }
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this._ScrollAnimationService.observeElements();
      this.animateSkills.set(true);
    }, 100);
  }
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

}
