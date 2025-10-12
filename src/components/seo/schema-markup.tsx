import Script from 'next/script';

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Tangerine",
    "description": "Tangerine turns your new tab into a focus hub with tasks, gratitude journaling, habit tracking, and daily motivation.",
    "url": "https://tangerine-extension.com",
    "applicationCategory": "BrowserExtension",
    "operatingSystem": "Chrome",
    "offers": [
      {
        "@type": "Offer",
        "name": "Monthly Plan",
        "price": "4.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2024-12-31"
      },
      {
        "@type": "Offer", 
        "name": "Yearly Plan",
        "price": "49.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2024-12-31"
      },
      {
        "@type": "Offer",
        "name": "Lifetime Plan", 
        "price": "149.99",
        "priceCurrency": "USD",
        "priceValidUntil": "2024-12-31"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "author": {
      "@type": "Organization",
      "name": "Moonlair"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Moonlair"
    }
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
