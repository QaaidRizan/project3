/**
 * Shading System for Terrene Engineering
 * 
 * This file defines a comprehensive shading system that ensures
 * consistent depth, hierarchy, and visual appeal across the application.
 * 
 * Design Principles:
 * - Use subtle shadows for depth without overwhelming the design
 * - Maintain accessibility with proper contrast ratios
 * - Create visual hierarchy through shadow intensity
 * - Follow material design principles for realistic lighting
 * - Ensure shadows work well on dark backgrounds
 */

export const SHADING = {
  // Base shadow values (in pixels)
  SHADOW_SIZES: {
    XS: '2px',
    SM: '4px',
    MD: '8px',
    LG: '16px',
    XL: '24px',
    XXL: '32px',
  },
  
  // Shadow blur values
  BLUR_VALUES: {
    XS: '2px',
    SM: '4px',
    MD: '8px',
    LG: '16px',
    XL: '24px',
    XXL: '32px',
  },
  
  // Shadow spread values
  SPREAD_VALUES: {
    XS: '0px',
    SM: '1px',
    MD: '2px',
    LG: '4px',
    XL: '8px',
    XXL: '16px',
  },
} as const;

export const SHADOW_STYLES = {
  // Subtle shadows for cards and containers
  CARD: {
    LIGHT: '0 2px 4px rgba(0, 0, 0, 0.1)',
    MEDIUM: '0 4px 8px rgba(0, 0, 0, 0.15)',
    DARK: '0 8px 16px rgba(0, 0, 0, 0.2)',
    HOVER: '0 12px 24px rgba(0, 0, 0, 0.25)',
  },
  
  // Elevated shadows for important elements
  ELEVATED: {
    LIGHT: '0 4px 8px rgba(0, 0, 0, 0.12)',
    MEDIUM: '0 8px 16px rgba(0, 0, 0, 0.18)',
    DARK: '0 16px 32px rgba(0, 0, 0, 0.25)',
    HOVER: '0 24px 48px rgba(0, 0, 0, 0.3)',
  },
  
  // Floating shadows for modals and overlays
  FLOATING: {
    LIGHT: '0 8px 16px rgba(0, 0, 0, 0.15)',
    MEDIUM: '0 16px 32px rgba(0, 0, 0, 0.2)',
    DARK: '0 24px 48px rgba(0, 0, 0, 0.3)',
    HOVER: '0 32px 64px rgba(0, 0, 0, 0.35)',
  },
  
  // Inset shadows for pressed states
  INSET: {
    LIGHT: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
    MEDIUM: 'inset 0 4px 8px rgba(0, 0, 0, 0.15)',
    DARK: 'inset 0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  
  // Glow effects for primary elements
  GLOW: {
    PRIMARY: '0 0 20px rgba(49, 130, 206, 0.3)',
    PRIMARY_HOVER: '0 0 30px rgba(49, 130, 206, 0.5)',
    WHITE: '0 0 20px rgba(255, 255, 255, 0.1)',
    WHITE_HOVER: '0 0 30px rgba(255, 255, 255, 0.2)',
  },
} as const;

export const DARK_THEME_SHADOWS = {
  // Shadows optimized for dark backgrounds
  CARD: {
    LIGHT: '0 2px 4px rgba(0, 0, 0, 0.3)',
    MEDIUM: '0 4px 8px rgba(0, 0, 0, 0.4)',
    DARK: '0 8px 16px rgba(0, 0, 0, 0.5)',
    HOVER: '0 12px 24px rgba(0, 0, 0, 0.6)',
  },
  
  ELEVATED: {
    LIGHT: '0 4px 8px rgba(0, 0, 0, 0.4)',
    MEDIUM: '0 8px 16px rgba(0, 0, 0, 0.5)',
    DARK: '0 16px 32px rgba(0, 0, 0, 0.6)',
    HOVER: '0 24px 48px rgba(0, 0, 0, 0.7)',
  },
  
  FLOATING: {
    LIGHT: '0 8px 16px rgba(0, 0, 0, 0.5)',
    MEDIUM: '0 16px 32px rgba(0, 0, 0, 0.6)',
    DARK: '0 24px 48px rgba(0, 0, 0, 0.7)',
    HOVER: '0 32px 64px rgba(0, 0, 0, 0.8)',
  },
  
  GLOW: {
    PRIMARY: '0 0 20px rgba(49, 130, 206, 0.4)',
    PRIMARY_HOVER: '0 0 30px rgba(49, 130, 206, 0.6)',
    WHITE: '0 0 20px rgba(255, 255, 255, 0.05)',
    WHITE_HOVER: '0 0 30px rgba(255, 255, 255, 0.1)',
  },
} as const;

export const SHADING_CLASSES = {
  // Card shadows
  CARD: {
    DEFAULT: 'shadow-md',
    HOVER: 'hover:shadow-lg',
    ELEVATED: 'shadow-lg',
    ELEVATED_HOVER: 'hover:shadow-xl',
  },
  
  // Button shadows
  BUTTON: {
    DEFAULT: 'shadow-sm',
    HOVER: 'hover:shadow-md',
    PRIMARY: 'shadow-md',
    PRIMARY_HOVER: 'hover:shadow-lg',
  },
  
  // Section shadows
  SECTION: {
    DEFAULT: 'shadow-lg',
    ELEVATED: 'shadow-xl',
    FLOATING: 'shadow-2xl',
  },
  
  // Form shadows
  FORM: {
    DEFAULT: 'shadow-md',
    FOCUS: 'focus:shadow-lg',
    ERROR: 'shadow-md shadow-red-500/20',
  },
  
  // Navigation shadows
  NAV: {
    DEFAULT: 'shadow-sm',
    HOVER: 'hover:shadow-md',
    ACTIVE: 'shadow-md',
  },
} as const;

export const CUSTOM_SHADOW_STYLES = {
  // Custom shadow styles for specific use cases
  HERO_SECTION: {
    style: '0 20px 40px rgba(0, 0, 0, 0.3)',
    className: 'shadow-2xl',
  },
  
  PROJECT_CARD: {
    style: '0 8px 16px rgba(0, 0, 0, 0.2)',
    className: 'shadow-lg',
    hover: '0 12px 24px rgba(0, 0, 0, 0.3)',
    hoverClass: 'hover:shadow-xl',
  },
  
  SERVICE_CARD: {
    style: '0 4px 8px rgba(0, 0, 0, 0.15)',
    className: 'shadow-md',
    hover: '0 8px 16px rgba(0, 0, 0, 0.25)',
    hoverClass: 'hover:shadow-lg',
  },
  
  TESTIMONIAL_CARD: {
    style: '0 6px 12px rgba(0, 0, 0, 0.18)',
    className: 'shadow-lg',
    hover: '0 10px 20px rgba(0, 0, 0, 0.28)',
    hoverClass: 'hover:shadow-xl',
  },
  
  CONTACT_FORM: {
    style: '0 8px 16px rgba(0, 0, 0, 0.2)',
    className: 'shadow-lg',
    focus: '0 12px 24px rgba(0, 0, 0, 0.3)',
    focusClass: 'focus:shadow-xl',
  },
  
  FOOTER: {
    style: '0 -4px 8px rgba(0, 0, 0, 0.1)',
    className: 'shadow-md',
  },
} as const;

// Utility function to get shadow based on theme
export const getShadow = (type: 'card' | 'elevated' | 'floating', intensity: 'light' | 'medium' | 'dark' | 'hover', theme: 'light' | 'dark' = 'dark') => {
  const shadowMap = theme === 'dark' ? DARK_THEME_SHADOWS : SHADOW_STYLES;
  return shadowMap[type.toUpperCase() as keyof typeof shadowMap][intensity.toUpperCase() as keyof typeof shadowMap['CARD']];
};

// Utility function to apply shadow with transition
export const getShadowWithTransition = (baseShadow: string, hoverShadow: string) => {
  return {
    style: {
      boxShadow: baseShadow,
      transition: 'box-shadow 0.3s ease-in-out',
    },
    hover: {
      boxShadow: hoverShadow,
    },
  };
};

// Predefined shadow combinations for common components
export const SHADOW_PRESETS = {
  // Hero section with dramatic shadow
  HERO: {
    style: DARK_THEME_SHADOWS.FLOATING.DARK,
    className: 'shadow-2xl',
  },
  
  // About section with subtle elevation
  ABOUT: {
    style: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
    className: 'shadow-xl',
  },
  
  // Services with interactive shadows
  SERVICES: {
    style: DARK_THEME_SHADOWS.CARD.MEDIUM,
    className: 'shadow-lg',
    hover: DARK_THEME_SHADOWS.CARD.HOVER,
    hoverClass: 'hover:shadow-xl',
  },
  
  // Projects with floating effect
  PROJECTS: {
    style: DARK_THEME_SHADOWS.FLOATING.MEDIUM,
    className: 'shadow-xl',
    hover: DARK_THEME_SHADOWS.FLOATING.HOVER,
    hoverClass: 'hover:shadow-2xl',
  },
  
  // Contact with form shadows
  CONTACT: {
    style: DARK_THEME_SHADOWS.ELEVATED.LIGHT,
    className: 'shadow-lg',
    focus: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
    focusClass: 'focus:shadow-xl',
  },
  
  // Testimonials with card shadows
  TESTIMONIALS: {
    style: DARK_THEME_SHADOWS.CARD.DARK,
    className: 'shadow-xl',
    hover: DARK_THEME_SHADOWS.CARD.HOVER,
    hoverClass: 'hover:shadow-2xl',
  },
  
  // Footer with subtle shadow
  FOOTER: {
    style: DARK_THEME_SHADOWS.CARD.LIGHT,
    className: 'shadow-md',
  },
} as const;
 