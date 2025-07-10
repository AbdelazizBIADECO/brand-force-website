# Brandforce.ai - AI-Powered SEO Platform

## Overview

Brandforce.ai is a full-stack web application that combines AI-powered SEO tools with human expertise to deliver comprehensive search engine optimization services. The platform features a modern React frontend with a Node.js/Express backend, utilizing PostgreSQL for data persistence and Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.
Initial release strategy: Launch without pricing page and SEO calculator components (hidden but preserved in code for future activation).

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Framework**: Radix UI components with custom styling
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Validation**: Zod for schema validation
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Design System
- **Component Library**: Shadcn/ui components built on Radix UI
- **Typography**: Manrope for headings, Inter for body text
- **Color Scheme**: Dark theme with neon green accents
- **Responsive Design**: Mobile-first approach with breakpoints

## Key Components

### Database Schema
Three main entities managed through Drizzle ORM:
1. **Audit Requests**: Website audit submissions with email and website URL
2. **Contact Submissions**: General contact form submissions with name, email, website, and message
3. **Newsletter Subscriptions**: Email subscriptions with unique constraint

### API Endpoints
- `POST /api/audit-request` - Submit website audit requests
- `POST /api/contact` - Submit contact form messages
- `POST /api/newsletter` - Subscribe to newsletter (with duplicate prevention)

### Core Pages
- **Home**: Hero section with animated text, service explanations, and proof of impact
- **Services**: Detailed service offerings with AI-powered solutions
- **Case Studies**: Client results and testimonials
- **Pricing**: Tiered pricing plans with feature comparisons
- **About**: Company information and team details
- **Contact**: Contact forms and company information
- **Blog**: Content marketing and SEO insights

### Storage Layer
Implements an abstraction layer (`IStorage`) with:
- In-memory storage for development (`MemStorage`)
- Database operations for audit requests, contact submissions, and newsletter subscriptions
- Future extensibility for database implementation

## Data Flow

1. **User Interaction**: Users interact with forms on various pages
2. **Form Validation**: React Hook Form with Zod schema validation
3. **API Requests**: TanStack Query manages API calls to Express endpoints
4. **Server Processing**: Express routes validate data and store in database
5. **Response Handling**: Success/error feedback via toast notifications

## External Dependencies

### Frontend Dependencies
- **UI Components**: Radix UI primitives for accessibility
- **Icons**: Lucide React icons and React Icons
- **Date Handling**: date-fns for date manipulation
- **Form Management**: React Hook Form with Zod resolvers
- **Styling**: Tailwind CSS with class-variance-authority

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type checking
- **Session Management**: express-session with connect-pg-simple

### Development Tools
- **Build**: Vite for frontend, esbuild for backend
- **Database Management**: Drizzle Kit for migrations and schema management
- **Development**: tsx for TypeScript execution
- **Replit Integration**: Cartographer and runtime error modal plugins

## Deployment Strategy

### Development Environment
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database migrations handled by Drizzle Kit
- Replit-specific plugins for development experience

### Production Build
- Frontend built with Vite to `dist/public`
- Backend bundled with esbuild to `dist/index.js`
- Static file serving handled by Express in production
- Database connection via environment variable `DATABASE_URL`

### Environment Configuration
- Development: NODE_ENV=development with Vite middleware
- Production: NODE_ENV=production with static file serving
- Database: PostgreSQL connection string required
- Session management integrated with PostgreSQL

The application follows a monorepo structure with shared TypeScript definitions, enabling type safety across the full stack while maintaining clear separation of concerns between frontend and backend components.

## Recent Changes (December 2024)

### Initial Release Preparation
- **Hero Section**: Removed demo button, replaced with "Learn More About Our Services" link (no demo currently available)
- **Pricing Page**: Hidden entire pricing page from navigation and routing while preserving code for future release
- **SEO ROI Calculator**: Commented out SeoRoiCalculator component from pricing page (code preserved for later activation)
- **Navigation**: Removed pricing link from header navigation menu
- **Blog System**: Implemented comprehensive blog with 5 detailed SEO articles covering AI SEO, technical SEO, content marketing, local SEO, and e-commerce
- **Content Strategy**: Positioned Brandforce as thought leader with expert-level content instead of placeholder articles
- **Team Structure**: Updated team members to Stuart (Chief Product), Abdou (Head of AI), Chris (SEO Lead) with branded avatar circles
- **Social Media**: Hidden all social media handles from footer for initial release
- **Legal Pages**: Created comprehensive Terms of Service, Privacy Policy, and Sitemap pages with proper routing