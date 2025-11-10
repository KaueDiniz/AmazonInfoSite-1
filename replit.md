# Guardiã Verde - Amazon Rainforest Monitoring Platform

## Overview

Guardiã Verde is a web application designed to monitor deforestation in the Amazon rainforest using open data sources and artificial intelligence. The platform processes satellite imagery (Sentinel-2) to detect vegetation loss through temporal change detection, generating georeferenced alerts in near real-time (< 48 hours latency). The system integrates official data sources (PRODES, DETER) and independent platforms (MapBiomas) for cross-validation, publishing results through an interactive web map interface.

The application serves as an educational and monitoring tool to increase transparency and support conservation efforts by reducing information asymmetry between government agencies, researchers, and the public.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, utilizing a component-based architecture organized by feature sections.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. The application follows a single-page application (SPA) pattern with minimal routes (Home and NotFound pages).

**UI Component System**: Built on shadcn/ui (Radix UI primitives) with extensive customization through Tailwind CSS. Components follow the "New York" style variant with custom color schemes supporting light/dark themes. The design system emphasizes immersive visual storytelling with environmental photography and educational clarity.

**State Management**: React Query (TanStack Query) for server state management with custom query client configuration. Local component state managed through React hooks (useState, useEffect). No global state management library is used, keeping the architecture simple.

**Styling Approach**: Tailwind CSS-first with custom design tokens for spacing, colors, and typography. The design guidelines specify a reference-based approach inspired by National Geographic and nature documentary interfaces, using Google Fonts (Montserrat, Inter, Merriweather) for typography hierarchy.

**Theme System**: Light/dark mode toggle with CSS custom properties for theme variables. Theme preference persisted to localStorage with document-level class toggling.

### Backend Architecture

**Server Framework**: Express.js server with TypeScript running on Node.js. The server uses ESM modules (type: "module" in package.json) for modern JavaScript syntax.

**API Structure**: RESTful API design with routes prefixed under `/api`. Currently using a minimal route configuration ready for expansion. Request/response logging middleware tracks API performance.

**Storage Layer**: Abstracted through an `IStorage` interface with in-memory implementation (`MemStorage`). This design allows easy migration to database-backed storage without changing business logic. The storage pattern supports CRUD operations for user management.

**Session Management**: Configured to use `connect-pg-simple` for PostgreSQL-backed session storage, though currently using in-memory storage adapter.

**Development Server**: Vite integration for hot module replacement (HMR) in development mode. The server acts as a middleware host for Vite's dev server, enabling rapid frontend iteration while maintaining API functionality.

**Build Process**: Two-stage build - Vite builds the frontend to `dist/public`, while esbuild bundles the server code to `dist/index.js` with external package resolution.

### Data Storage Solutions

**Database**: PostgreSQL configured through Drizzle ORM with Neon serverless driver (`@neondatabase/serverless`). Connection managed via `DATABASE_URL` environment variable.

**ORM Layer**: Drizzle ORM provides type-safe database queries with TypeScript inference. Schema definitions use `drizzle-zod` for validation schema generation from database models.

**Schema Design**: Currently includes a users table with UUID primary keys (generated via `gen_random_uuid()`), username (unique), and password fields. Schema lives in `shared/schema.ts` for code sharing between client and server.

**Migrations**: Drizzle Kit manages database migrations with files stored in `./migrations` directory. Migrations can be pushed to database via `npm run db:push` script.

**Development Pattern**: In-memory storage used during development, with architecture supporting seamless transition to PostgreSQL for production deployments.

### Authentication and Authorization

**Current State**: Basic user schema defined (username/password) but authentication flow not yet implemented. Infrastructure prepared for session-based authentication using PostgreSQL session store.

**Planned Approach**: Express session middleware configured with `connect-pg-simple`, suggesting cookie-based session authentication pattern. The storage interface includes user lookup methods by ID and username, supporting traditional login flows.

## External Dependencies

### Third-Party UI Libraries

- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives (@radix-ui/react-*) for building the component system
- **shadcn/ui**: Pre-configured component patterns built on Radix UI primitives with Tailwind CSS styling
- **Lucide React**: Icon library providing consistent iconography throughout the interface
- **class-variance-authority**: Utility for creating variant-based component APIs with TypeScript support
- **cmdk**: Command menu component for keyboard-driven navigation

### Data Fetching and State

- **TanStack Query (React Query)**: Server state management, caching, and synchronization with custom query client configuration
- **React Hook Form**: Form state management with `@hookform/resolvers` for validation schema integration

### Styling and Design

- **Tailwind CSS**: Utility-first CSS framework with custom configuration for design tokens
- **PostCSS**: CSS processing with Autoprefixer for browser compatibility
- **Google Fonts**: External typography resources (Montserrat, Inter, Merriweather, Architects Daughter, DM Sans, Fira Code, Geist Mono)

### Build Tools and Development

- **Vite**: Frontend build tool and dev server with React plugin
- **esbuild**: Fast JavaScript bundler for server-side code
- **TypeScript**: Type safety across client and server code with shared types
- **tsx**: TypeScript execution for Node.js development server
- **Replit Plugins**: Development tooling (@replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner)

### Database and ORM

- **Drizzle ORM**: Type-safe ORM with PostgreSQL dialect
- **Drizzle Kit**: Migration management and schema introspection tools
- **Neon Serverless**: PostgreSQL driver optimized for serverless environments
- **Zod**: Schema validation library integrated with Drizzle for type-safe validation

### Routing and Navigation

- **Wouter**: Minimalist client-side router for React applications

### Utility Libraries

- **date-fns**: Modern date utility library for JavaScript
- **clsx**: Utility for constructing className strings conditionally
- **tailwind-merge**: Merge Tailwind CSS classes without style conflicts
- **nanoid**: Compact, URL-friendly unique ID generator

### Asset Management

The application references generated images stored in `attached_assets/generated_images/` directory, including wildlife photography (jaguar, dolphins, macaws, frogs, sloths, eagles) and landscape imagery (Amazon river, forest canopy). These assets support the immersive visual storytelling approach.

### External Data Sources (Planned Integration)

While not yet implemented in the codebase, the application architecture is designed to integrate:

- **PRODES/INPE**: Official Brazilian deforestation monitoring data
- **DETER**: Real-time deforestation alert system
- **MapBiomas**: Independent land use and coverage mapping platform
- **TerraBrasilis**: Spatial data portal with dashboards and time series
- **Sentinel-2**: ESA satellite imagery via STAC APIs for change detection analysis

The methodology describes a pipeline for acquiring Sentinel-2 L2A imagery, calculating NDVI/ΔNDVI for vegetation change detection, and generating GeoJSON alerts for publication in an interactive Leaflet-based web map.