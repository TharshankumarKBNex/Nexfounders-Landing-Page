# NexFounders - Startup Ecosystem Platform

## Overview

NexFounders is a comprehensive AI-powered startup ecosystem platform designed to connect founders, investors, and talented individuals in India's entrepreneurial landscape. The platform aims to democratize access to capital, talent, and opportunities by providing transparent processes and intelligent matching capabilities. Built as a modern web application, it features a React-based frontend with a clean, professional design system and an Express.js backend with PostgreSQL database integration through Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a comprehensive design system using CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interfaces
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Middleware**: Custom logging middleware for request tracking and error handling
- **Development**: Hot module replacement and development server integration with Vite

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Database**: PostgreSQL with connection to Neon serverless database
- **Schema Management**: Centralized schema definitions in shared directory with Zod validation
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations

### Project Structure
- **Monorepo Design**: Client, server, and shared code in organized directories
- **Shared Types**: Common TypeScript interfaces and schemas between frontend and backend
- **Asset Management**: Centralized asset handling with proper import aliases
- **Configuration**: Unified build and development configuration across the stack

### Authentication & Session Management
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **User Management**: Basic user schema with username/password authentication ready for implementation

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting for production and development
- **Drizzle Kit**: Database migration and schema management tools

### UI & Styling
- **Radix UI**: Headless UI components for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Google Fonts**: Inter font family for consistent typography
- **Font Awesome**: Icon library for comprehensive iconography

### Development Tools
- **Replit Integration**: Development environment optimization with runtime error overlays and cartographer tooling
- **TypeScript**: Static type checking across the entire application
- **ESBuild**: Fast bundling for production server builds

### Frontend Libraries
- **React Hook Form**: Form handling with validation resolvers
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Type-safe component variant management
- **Embla Carousel**: Touch-friendly carousel components

The architecture emphasizes type safety, developer experience, and scalability while maintaining a clean separation of concerns between client and server code.