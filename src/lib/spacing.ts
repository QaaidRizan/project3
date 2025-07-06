/**
 * Spacing System for Terrene Engineering
 * 
 * This file defines a comprehensive spacing system that ensures
 * consistent gaps and spacing throughout the application.
 * 
 * Design Principles:
 * - Use 8px base unit (0.5rem) for consistent scaling
 * - Maintain visual hierarchy through systematic spacing
 * - Ensure responsive spacing across different screen sizes
 * - Follow accessibility guidelines for touch targets and readability
 */

export const SPACING = {
  // Base spacing unit (8px)
  BASE: '0.5rem', // 8px
  
  // Micro spacing (for fine adjustments)
  XS: '0.25rem',   // 4px
  SM: '0.5rem',    // 8px
  MD: '0.75rem',   // 12px
  
  // Standard spacing
  BASE_1: '1rem',      // 16px
  BASE_1_5: '1.5rem',  // 24px
  BASE_2: '2rem',      // 32px
  BASE_2_5: '2.5rem',  // 40px
  BASE_3: '3rem',      // 48px
  BASE_4: '4rem',      // 64px
  BASE_5: '5rem',      // 80px
  BASE_6: '6rem',      // 96px
  
  // Large spacing (for section separation)
  LG: '8rem',      // 128px
  XL: '10rem',     // 160px
  XXL: '12rem',    // 192px
} as const;

export const SECTION_SPACING = {
  // Section padding (top and bottom) - Further Reduced
  SECTION_PADDING: {
    MOBILE: '2.5rem',  // 40px (reduced from 48px)
    TABLET: '3.5rem',  // 56px (reduced from 64px)
    DESKTOP: '4rem',   // 64px (reduced from 80px)
  },
  
  // Section margins (between sections) - Further Reduced
  SECTION_MARGIN: {
    MOBILE: '1.25rem', // 20px (reduced from 24px)
    TABLET: '1.75rem', // 28px (reduced from 32px)
    DESKTOP: '2.5rem', // 40px (reduced from 48px)
  },
} as const;

export const COMPONENT_SPACING = {
  // Card spacing - Further Reduced
  CARD: {
    PADDING: {
      MOBILE: '0.75rem',   // 12px (reduced from 16px)
      TABLET: '1rem',     // 16px (reduced from 24px)
      DESKTOP: '1.5rem',  // 24px (reduced from 32px)
    },
    GAP: '0.75rem',       // 12px (reduced from 16px)
    BORDER_RADIUS: '1rem', // 16px (kept same)
  },
  
  // Grid spacing - Further Reduced
  GRID: {
    GAP: {
      MOBILE: '0.5rem',   // 8px (reduced from 12px)
      TABLET: '0.75rem',  // 12px (reduced from 16px)
      DESKTOP: '1rem',    // 16px (reduced from 24px)
    },
  },
  
  // Button spacing - Further Reduced
  BUTTON: {
    PADDING: {
      X: '0.75rem',         // 12px (reduced from 16px)
      Y: '0.375rem',      // 6px (reduced from 8px)
    },
    GAP: '0.375rem',      // 6px (reduced from 8px)
  },
  
  // Form spacing - Further Reduced
  FORM: {
    GAP: '0.75rem',         // 12px (reduced from 16px)
    FIELD_GAP: '0.5rem',  // 8px (reduced from 12px)
  },
  
  // Navigation spacing - Further Reduced
  NAV: {
    ITEM_GAP: '1rem',     // 16px (reduced from 24px)
    PADDING: '0.5rem',    // 8px (reduced from 12px)
  },
} as const;

export const TYPOGRAPHY_SPACING = {
  // Heading margins - Further Reduced
  HEADING: {
    MARGIN_BOTTOM: {
      H1: '1rem',         // 16px (reduced from 24px)
      H2: '0.75rem',      // 12px (reduced from 16px)
      H3: '0.5rem',       // 8px (reduced from 12px)
      H4: '0.375rem',     // 6px (reduced from 8px)
    },
  },
  
  // Paragraph spacing - Further Reduced
  PARAGRAPH: {
    MARGIN_BOTTOM: '0.75rem', // 12px (reduced from 16px)
    LINE_HEIGHT: '1.6',       // Maintained for readability
  },
  
  // List spacing - Further Reduced
  LIST: {
    ITEM_GAP: '0.25rem',      // 4px (reduced from 8px)
    MARGIN_BOTTOM: '0.5rem',  // 8px (reduced from 12px)
  },
} as const;

export const RESPONSIVE_SPACING = {
  // Responsive padding classes - Further Reduced
  PADDING: {
    MOBILE: 'px-3 py-10',     // 12px horizontal, 40px vertical (reduced from px-4 py-12)
    TABLET: 'px-5 py-14',     // 20px horizontal, 56px vertical (reduced from px-6 py-16)
    DESKTOP: 'px-6 py-16',    // 24px horizontal, 64px vertical (reduced from px-8 py-20)
  },
  
  // Responsive margin classes - Further Reduced
  MARGIN: {
    MOBILE: 'mx-3 my-5',      // 12px horizontal, 20px vertical (reduced from mx-4 my-6)
    TABLET: 'mx-5 my-7',      // 20px horizontal, 28px vertical (reduced from mx-6 my-8)
    DESKTOP: 'mx-6 my-10',    // 24px horizontal, 40px vertical (reduced from mx-8 my-12)
  },
  
  // Responsive gap classes - Further Reduced
  GAP: {
    MOBILE: 'gap-2',          // 8px (reduced from gap-3)
    TABLET: 'gap-3',          // 12px (reduced from gap-4)
    DESKTOP: 'gap-4',         // 16px (reduced from gap-6)
  },
} as const;

// Utility function to get responsive spacing
export const getResponsiveSpacing = (type: 'padding' | 'margin' | 'gap') => {
  return RESPONSIVE_SPACING[type.toUpperCase() as keyof typeof RESPONSIVE_SPACING];
};

// Predefined spacing classes for common use cases - Further Reduced
export const SPACING_CLASSES = {
  // Section spacing - Further Reduced
  SECTION: 'pt-10 pb-6 md:pt-12 md:pb-8', // 40px/48px top, 24px/32px bottom
  
  // Component spacing - Further Reduced
  COMPONENT: 'p-2 md:p-3 lg:p-4', // Responsive padding (reduced from p-3 md:p-4 lg:p-6)
  
  // Card spacing - Further Reduced
  CARD: 'p-2 md:p-2 lg:p-3', // Responsive card padding (reduced from p-2 md:p-3 lg:p-4)
  
  // Grid spacing - Further Reduced
  GRID: 'gap-2 md:gap-2 lg:gap-3', // Responsive grid gap (reduced from gap-2 md:gap-3 lg:gap-4)
  
  // Button spacing - Further Reduced
  BUTTON: 'px-3 py-1.5 text-sm', // Standard button padding, adjusted font size (from px-4 py-2)
  
  // Form spacing - Further Reduced
  FORM: 'space-y-3', // Vertical form spacing (reduced from space-y-4)
  
  // Navigation spacing - Further Reduced
  NAV: 'space-x-4', // Horizontal navigation spacing (reduced from space-x-6)
} as const; 