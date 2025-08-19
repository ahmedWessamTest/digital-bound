import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit } from '@angular/core';
import { Review } from '../../../../shared/models/review';
import { ScrollAnimationService } from '../../../../core/services/scroll-animation.service';

@Component({
  selector: 'app-reviews',
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
  animations: [
    trigger('slideIn', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(-30)'
        }),
        animate('0.6s ease-out')
      ])
    ])
  ]
})
export class ReviewsComponent implements OnInit {
  private readonly _ScrollAnimationService = inject(ScrollAnimationService)
  reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      rating: 5,
      text: 'Exceptional service and outstanding results. They transformed our entire digital presence and increased our conversion rate by 300%. Highly recommended!',
      image: ''
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'Innovation Labs',
      rating: 5,
      text: 'Professional, efficient, and innovative. The team delivered exactly what we needed on time and within budget. Looking forward to future collaborations.',
      image: ''
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      company: 'Growth Solutions',
      rating: 5,
      text: 'Amazing attention to detail and customer service. They understood our vision perfectly and brought it to life better than we imagined.',
      image: ''
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'Founder',
      company: 'StartupVenture',
      rating: 5,
      text: 'Game-changing partnership. Their expertise in digital transformation helped us scale from startup to industry leader in just 18 months.',
      image: ''
    },
    {
      id: 5,
      name: 'Lisa Park',
      position: 'Operations Manager',
      company: 'Retail Plus',
      rating: 5,
      text: 'Incredible ROI and measurable results. The new system they built increased our operational efficiency by 250%. Worth every penny.',
      image: ''
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Product Manager',
      company: 'Tech Innovators',
      rating: 5,
      text: 'Outstanding technical expertise and project management. They handled complex requirements with ease and delivered a flawless solution.',
      image: ''
    }
  ];
  featuredTestimonial = {
    name: 'Alexandra Foster',
    position: 'CEO',
    company: 'Fortune 500 Enterprise',
    text: 'Working with this team has been transformative for our business. Their innovative approach and technical excellence helped us achieve results we never thought possible.'
  };
  trustedCompanies = [
    { name: 'TechCorp', industry: 'Technology' },
    { name: 'InnovateLab', industry: 'R&D' },
    { name: 'GrowthPro', industry: 'Marketing' },
    { name: 'ScaleUp', industry: 'Startup' }
  ];
  ngOnInit(): void {
    setTimeout(() => {
      this._ScrollAnimationService.observeElements();
    }, 100);
  }
  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
  getInitials(name: string): string {
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
  }
  scrollToSection(sectionId: string): void {
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
