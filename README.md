# SoftSell - Software License Marketplace

A modern, responsive single-page website for SoftSell, a platform that helps businesses monetize their unused software licenses.

## Features

- **Modern UI/UX Design**: Built with React and Tailwind CSS for a clean, professional look
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Interactive Components**:
  - Hero section with clear value proposition
  - "How It Works" section with step-by-step process
  - "Why Choose Us" section highlighting key benefits
  - Customer testimonials
  - Contact form with frontend validation
  - AI-powered chat widget for instant support
- **Advanced Features**:
  - Light/Dark mode toggle with system preference detection
  - Smooth animations using Framer Motion
  - SEO optimization with meta tags
  - Responsive navigation with mobile menu
  - Interactive chat interface with mock LLM responses

## Tech Stack

- React.js with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- Heroicons for icons
- Form validation using React state management
- React Context for theme management
- React Helmet for SEO

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
  ├── components/
  │   ├── Hero.tsx
  │   ├── HowItWorks.tsx
  │   ├── WhyChooseUs.tsx
  │   ├── Testimonials.tsx
  │   ├── ContactForm.tsx
  │   ├── Navbar.tsx
  │   ├── Footer.tsx
  │   ├── ThemeToggle.tsx
  │   └── ChatWidget.tsx
  ├── context/
  │   └── ThemeContext.tsx
  ├── App.tsx
  ├── main.tsx
  └── index.css
```

## Design Choices

- **Color Palette**: Professional blue tones with white and gray accents
- **Typography**: Modern, clean font stack with Inter as the primary font
- **Layout**: Spacious sections with clear hierarchy and consistent padding
- **Interactions**: 
  - Smooth hover states and form validation feedback
  - Animated transitions using Framer Motion
  - Interactive chat interface with typing indicators
- **Accessibility**: 
  - Semantic HTML and ARIA attributes
  - Keyboard navigation support
  - High contrast mode support
- **Theme Support**:
  - Light and dark mode
  - System preference detection
  - Smooth theme transitions

## Development Time

Approximately 8-10 hours including:
- Initial setup and configuration
- Component development
- Styling and responsive design
- Form validation implementation
- Theme system implementation
- Chat widget integration
- Animation implementation
- SEO optimization
- Testing and refinements

## Future Enhancements

- Real AI integration for chat responses
- User authentication system
- License marketplace functionality
- Analytics integration
- Performance optimizations
- Internationalization support
