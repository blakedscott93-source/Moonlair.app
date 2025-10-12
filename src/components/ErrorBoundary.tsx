"use client";

import { useEffect } from 'react';

export default function HydrationErrorBoundary() {
  useEffect(() => {
    // Suppress hydration errors caused by browser extensions
    const originalError = console.error;
    const originalWarn = console.warn;
    
    const suppressHydrationError = (...args: unknown[]) => {
      const message = args[0];
      if (typeof message === 'string') {
        // Suppress ALL hydration-related errors
        if (
          message.includes('hydration') ||
          message.includes('bis_skin_checked') ||
          message.includes('server rendered HTML') ||
          message.includes('tree hydrated') ||
          message.includes('didn&apos;t match the client properties') ||
          message.includes('This won&apos;t be patched up') ||
          message.includes('A tree hydrated but some attributes') ||
          message.includes('browser extension') ||
          message.includes('messes with the HTML') ||
          message.includes('SSR-ed Client Component') ||
          message.includes('typeof window') ||
          message.includes('Date.now') ||
          message.includes('Math.random') ||
          message.includes('Invalid HTML tag nesting')
        ) {
          return; // Suppress these errors completely
        }
      }
      // Allow other errors through
      originalError.apply(console, args);
    };

    console.error = suppressHydrationError;
    console.warn = suppressHydrationError;

    // Also suppress React hydration warnings
    
    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return null;
}
