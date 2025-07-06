# Shading System Guide for Terrene Engineering

## Overview

The shading system provides consistent depth, hierarchy, and visual appeal across the Terrene Engineering application. It follows UI/UX principles to create a professional, modern interface with proper visual hierarchy.

## Design Principles

### 1. **Depth and Hierarchy**
- Use shadows to create visual layers and establish content hierarchy
- Important elements get stronger shadows
- Interactive elements have hover states with enhanced shadows

### 2. **Accessibility**
- Maintain proper contrast ratios
- Ensure shadows don't interfere with text readability
- Consider users with visual impairments

### 3. **Material Design Influence**
- Follow realistic lighting principles
- Shadows indicate elevation and depth
- Consistent shadow direction and intensity

### 4. **Dark Theme Optimization**
- Shadows optimized for dark backgrounds
- Higher opacity values for better visibility
- Subtle glow effects for primary elements

## Shadow Categories

### 1. **Card Shadows**
```typescript
CARD: {
  LIGHT: '0 2px 4px rgba(0, 0, 0, 0.3)',
  MEDIUM: '0 4px 8px rgba(0, 0, 0, 0.4)',
  DARK: '0 8px 16px rgba(0, 0, 0, 0.5)',
  HOVER: '0 12px 24px rgba(0, 0, 0, 0.6)',
}
```

**Usage**: Cards, containers, and content blocks
- **Light**: Subtle elevation for basic cards
- **Medium**: Standard elevation for most cards
- **Dark**: Strong elevation for important content
- **Hover**: Enhanced elevation on interaction

### 2. **Elevated Shadows**
```typescript
ELEVATED: {
  LIGHT: '0 4px 8px rgba(0, 0, 0, 0.4)',
  MEDIUM: '0 8px 16px rgba(0, 0, 0, 0.5)',
  DARK: '0 16px 32px rgba(0, 0, 0, 0.6)',
  HOVER: '0 24px 48px rgba(0, 0, 0, 0.7)',
}
```

**Usage**: Important sections, modals, and overlays
- **Light**: Subtle elevation for sections
- **Medium**: Standard elevation for main content
- **Dark**: Strong elevation for hero sections
- **Hover**: Maximum elevation for interactive elements

### 3. **Floating Shadows**
```typescript
FLOATING: {
  LIGHT: '0 8px 16px rgba(0, 0, 0, 0.5)',
  MEDIUM: '0 16px 32px rgba(0, 0, 0, 0.6)',
  DARK: '0 24px 48px rgba(0, 0, 0, 0.7)',
  HOVER: '0 32px 64px rgba(0, 0, 0, 0.8)',
}
```

**Usage**: Modals, dropdowns, and floating elements
- Creates a sense of floating above the content
- Used for overlays and important UI elements

### 4. **Glow Effects**
```typescript
GLOW: {
  PRIMARY: '0 0 20px rgba(49, 130, 206, 0.4)',
  PRIMARY_HOVER: '0 0 30px rgba(49, 130, 206, 0.6)',
  WHITE: '0 0 20px rgba(255, 255, 255, 0.05)',
  WHITE_HOVER: '0 0 30px rgba(255, 255, 255, 0.1)',
}
```

**Usage**: Primary buttons, important actions, and highlights
- Subtle glow for primary elements
- Enhanced glow on hover states

## Component-Specific Shadows

### 1. **Hero Section**
```typescript
HERO: {
  style: DARK_THEME_SHADOWS.FLOATING.DARK,
  className: 'shadow-2xl',
}
```
- Dramatic shadow for maximum impact
- Creates depth for the main hero content

### 2. **About Section**
```typescript
ABOUT: {
  style: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
  className: 'shadow-xl',
}
```
- Moderate elevation for content sections
- Balances importance with readability

### 3. **Services Section**
```typescript
SERVICES: {
  style: DARK_THEME_SHADOWS.CARD.MEDIUM,
  className: 'shadow-lg',
  hover: DARK_THEME_SHADOWS.CARD.HOVER,
  hoverClass: 'hover:shadow-xl',
}
```
- Interactive shadows for service cards
- Enhanced shadows on hover for better UX

### 4. **Projects Section**
```typescript
PROJECTS: {
  style: DARK_THEME_SHADOWS.FLOATING.MEDIUM,
  className: 'shadow-xl',
  hover: DARK_THEME_SHADOWS.FLOATING.HOVER,
  hoverClass: 'hover:shadow-2xl',
}
```
- Floating effect for project cards
- Strong hover states for interactive elements

### 5. **Contact Section**
```typescript
CONTACT: {
  style: DARK_THEME_SHADOWS.ELEVATED.LIGHT,
  className: 'shadow-lg',
  focus: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
  focusClass: 'focus:shadow-xl',
}
```
- Light elevation for forms
- Enhanced shadows on focus states

### 6. **Testimonials Section**
```typescript
TESTIMONIALS: {
  style: DARK_THEME_SHADOWS.CARD.DARK,
  className: 'shadow-xl',
  hover: DARK_THEME_SHADOWS.CARD.HOVER,
  hoverClass: 'hover:shadow-2xl',
}
```
- Strong shadows for testimonial cards
- Interactive hover states

## Implementation Examples

### 1. **Basic Card with Shadow**
```tsx
import { DARK_THEME_SHADOWS } from '@/lib/shading';

<Card 
  className="transition-all duration-300 hover:shadow-xl"
  style={{
    boxShadow: DARK_THEME_SHADOWS.CARD.MEDIUM,
  }}
>
  {/* Card content */}
</Card>
```

### 2. **Interactive Button with Glow**
```tsx
import { DARK_THEME_SHADOWS } from '@/lib/shading';

<Button 
  className="transition-all duration-300 hover:shadow-lg"
  style={{
    boxShadow: DARK_THEME_SHADOWS.GLOW.PRIMARY,
  }}
>
  Click me
</Button>
```

### 3. **Form Input with Focus Shadow**
```tsx
import { DARK_THEME_SHADOWS } from '@/lib/shading';

<Input 
  className="transition-all duration-300 focus:shadow-lg"
  style={{
    boxShadow: DARK_THEME_SHADOWS.CARD.LIGHT,
  }}
/>
```

### 4. **Section with Preset Shadow**
```tsx
import { SHADOW_PRESETS } from '@/lib/shading';

<section 
  className="transition-all duration-300"
  style={{
    boxShadow: SHADOW_PRESETS.ABOUT.style,
  }}
>
  {/* Section content */}
</section>
```

## Best Practices

### 1. **Consistency**
- Use the same shadow intensity for similar elements
- Maintain consistent shadow direction across the app
- Apply shadows systematically based on element importance

### 2. **Performance**
- Use CSS classes when possible for better performance
- Limit the number of shadow layers per element
- Consider using `will-change: transform` for animated shadows

### 3. **Accessibility**
- Ensure sufficient contrast between elements and shadows
- Don't rely solely on shadows for visual hierarchy
- Test with high contrast mode enabled

### 4. **Responsive Design**
- Adjust shadow intensity for different screen sizes
- Consider reducing shadows on mobile devices
- Maintain readability across all devices

## Shadow Utilities

### 1. **getShadow() Function**
```typescript
import { getShadow } from '@/lib/shading';

const shadow = getShadow('card', 'medium', 'dark');
// Returns: '0 8px 16px rgba(0, 0, 0, 0.5)'
```

### 2. **getShadowWithTransition() Function**
```typescript
import { getShadowWithTransition } from '@/lib/shading';

const shadowConfig = getShadowWithTransition(
  DARK_THEME_SHADOWS.CARD.MEDIUM,
  DARK_THEME_SHADOWS.CARD.HOVER
);
```

### 3. **SHADING_CLASSES**
```typescript
import { SHADING_CLASSES } from '@/lib/shading';

// Predefined Tailwind classes
className={SHADING_CLASSES.CARD.DEFAULT} // 'shadow-md'
className={SHADING_CLASSES.CARD.HOVER}   // 'hover:shadow-lg'
```

## Maintenance

### 1. **Adding New Shadows**
- Follow the existing naming convention
- Test shadows on both light and dark themes
- Document new shadow usage in this guide

### 2. **Updating Shadows**
- Maintain backward compatibility when possible
- Test all components that use the updated shadows
- Update this guide with any changes

### 3. **Performance Monitoring**
- Monitor shadow impact on rendering performance
- Consider reducing shadow complexity on slower devices
- Use browser dev tools to profile shadow rendering

## Conclusion

The shading system provides a consistent, professional appearance while maintaining excellent usability and accessibility. By following these guidelines, developers can create visually appealing interfaces that enhance the user experience without compromising performance or accessibility.

Remember: Shadows should enhance the design, not dominate it. Use them thoughtfully to guide user attention and create clear visual hierarchy. 