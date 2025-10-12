"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    // Ensure fbq is available and fire PageView
    if (typeof window !== 'undefined' && window.fbq) {
      // Fire PageView event after component mounts
      window.fbq('track', 'PageView');
      console.log('Meta Pixel PageView fired');
    }
  }, []);

  return null; // This component doesn't render anything
}
