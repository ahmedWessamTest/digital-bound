import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollAnimationService } from '../../../../core/services/scroll-animation.service';
import { CustomValidators } from '../../../../shared/validators/form-validators';
import { ContactForm } from '../../../../shared/models/contact';
import { LucideAngularModule, Mail, Phone, MapPinHouse, Linkedin, Twitter, Instagram, Github } from 'lucide-angular';


@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(10px)' }),
      animate('0.3s ease-out', style({ opacity: 1, transform: 'translate(0)' }))
    ])
  ])]
})
export class ContactComponent implements OnInit {
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _ScrollAnimationService = inject(ScrollAnimationService);

  contactForm!: FormGroup;
  isSubmitting = signal<boolean>(false);
  submitting = false;
  submitStatus = signal<'idle' | 'success' | 'error'>('idle');

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

  businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'Closed' }
  ];

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

  ngOnInit(): void {
    this.initForm();
    setTimeout(() => {
      this._ScrollAnimationService.observeElements();
    }, 100);
  }
  private initForm(): void {
    this.contactForm = this._FormBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        CustomValidators.noWhitespace
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      subject: ['', [Validators.required]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        CustomValidators.noWhitespace
      ]]
    })
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitStatus.set('idle');

      const formData: ContactForm = this.contactForm.value;

      setTimeout(() => {
        console.log('Form submitted:', formData);
        this.isSubmitting.set(false);
        this.submitStatus.set('success');
        this.contactForm.reset();

        setTimeout(() => {
          this.submitStatus.set('idle');
        }, 5000);
      }, 2000);

    } else {
      this.contactForm.markAllAsTouched();
    }
  }
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.valid && (field.dirty || field.touched));
  }
  getMessageLength(): number {
    return this.contactForm.get('message')?.value?.length || 0;
  }
}
