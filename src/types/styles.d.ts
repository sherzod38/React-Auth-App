import 'react';

declare module 'react' {
  interface CSSProperties {
    // CSS custom properties
    '--primary-color'?: string;
    '--secondary-color'?: string;
    
    // Vendor prefixes
    WebkitBoxShadow?: string;
    MozBoxShadow?: string;
    
    // Allow any CSS variable
    [key: `--${string}`]: string | number;
  }
}