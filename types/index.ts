/**
 * Type Definitions
 *
 * Centralized TypeScript types for the application.
 * All component props and data structures should be typed here.
 */

import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Component Props Types
export interface ButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted";
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Team Types
export interface TeamMember {
  [x: string]: string | StaticImport;
  name: string;
  role: string;
  description: string;
  expertise: string;
  github: string;
  linkedin: string;
  email: string;
}

// Product Types
export interface Product {
  title: string;
  category: string;
  description: string;
  accent: "accent-primary" | "accent-secondary";
  cta: string;
  features: Array<{ icon: string; text: string }>;
}

// Philosophy/Value Types
export interface Principle {
  title: string;
  description: string;
  icon: string; // Icon identifier for Lucide icons
}

// Animation Types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  easing?: number[];
}

// Theme Types
export type Theme = "light" | "dark" | "system";

// Locale Types
export type Locale = "fa" | "en";

// SEO Types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
