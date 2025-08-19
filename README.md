# Angular Homepage Project

A modern, responsive homepage built with Angular 17, featuring clean architecture, animations, and red/black theming.

## Features

- ✨ Modern UI with red and black color scheme
- 🎭 Smooth animations and transitions
- 📱 Fully responsive design
- 🏗️ Clean architecture with feature modules
- ✅ Form validation
- 🚀 Performance optimized
- 🔍 SEO friendly
- ♿ Accessibility compliant

## Architecture

```
src/
├── app/
│   ├── core/
│   │   ├── components/          # Shared components (Navbar, Footer)
│   │   └── services/           # Core services (SEO, Animations)
│   ├── features/
│   │   └── home/
│   │       └── components/     # Feature-specific components
│   ├── shared/
│   │   ├── models/            # Data models
│   │   └── validators/        # Custom validators
│   └── app.component.ts       # Root component
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm start
```

3. Build for production:

```bash
npm run build
```

## Key Components

### Navbar

- Fixed navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting
- Glassmorphism effects

### Hero Section

- Animated hero with floating particles
- Call-to-action buttons
- Statistics showcase
- Gradient text effects

### About Section

- Company information
- Animated skill bars
- Feature highlights
- Interactive statistics

### Reviews Section

- Client testimonials
- Star ratings
- Trust indicators
- Featured testimonial carousel

### Contact Section

- Comprehensive contact form
- Real-time validation
- Contact information
- Business hours display

### Footer

- Company links and information
- Newsletter subscription
- Social media links
- Back to top functionality

## Performance Features

- Lazy loading for route components
- OnPush change detection where appropriate
- Optimized images and assets
- Tree-shaking friendly imports
- Bundle optimization

## SEO Features

- Meta tags management
- Structured data
- Semantic HTML
- Performance optimizations
- Social media tags

## Customization

### Colors

Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#ef4444', // Your brand color
    600: '#dc2626',
    // ... more shades
  }
}
```

### Content

Modify component content by updating the data arrays in each component:

- Reviews in `reviews.component.ts`
- Services in `about.component.ts`
- Contact info in `contact.component.ts`

### Animations

Customize animations in component files using Angular Animations API or CSS classes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
