# Tangerine - Marketing Website

A modern, responsive marketing website for the Tangerine Chrome extension built with Next.js 14, TypeScript, TailwindCSS, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Beautiful tangerine gradient theme with dark/light mode support
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Built with Next.js 14 App Router for optimal performance
- **SEO Optimized**: Complete SEO setup with metadata, sitemap, and schema markup
- **Accessible**: WCAG compliant with keyboard navigation support
- **Animations**: Smooth animations with Framer Motion

## 📁 Project Structure

```
src/
├── app/                    # Next.js 14 App Router pages
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── faq/              # FAQ page
│   ├── privacy/          # Privacy policy
│   ├── terms/            # Terms of service
│   ├── changelog/        # Changelog
│   ├── press/            # Press kit
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── not-found.tsx     # 404 page
│   ├── sitemap.ts        # Sitemap generation
│   ├── robots.ts         # Robots.txt
│   └── globals.css       # Global styles
├── components/
│   ├── layout/           # Layout components
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   └── layout.tsx
│   ├── sections/         # Page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   └── social-proof.tsx
│   ├── seo/              # SEO components
│   │   └── schema-markup.tsx
│   └── ui/               # shadcn/ui components
└── lib/                  # Utility functions
    └── utils.ts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database**: Supabase (for forms)
- **Payments**: Stripe
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tangerine-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   - Supabase credentials (for email forms)
   - Stripe keys (for payments)
   - Google Analytics ID (optional)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Form Handling (choose one)
NEXT_PUBLIC_FORMS_ENDPOINT=https://formspree.io/f/your_form_id

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# App Configuration
NEXT_PUBLIC_APP_URL=https://tangerine-extension.com
NEXT_PUBLIC_CHROME_WEB_STORE_ID=fhbkcimpcdmddemoglnmodpkinabamlb
```

## 🎨 Customization

### Colors
The tangerine color scheme is defined in `src/app/globals.css`. You can customize the colors by modifying the CSS custom properties:

```css
:root {
  --primary: oklch(0.65 0.15 45); /* Tangerine orange */
  --accent: oklch(0.7 0.12 45);
  /* ... other colors */
}
```

### Content
- Update copy in component files
- Modify pricing in `src/app/pricing/page.tsx`
- Update FAQ content in `src/app/faq/page.tsx`
- Change company info in `src/app/press/page.tsx`

## 📱 Pages

- **Home** (`/`) - Hero section, features overview, social proof
- **Features** (`/features`) - Detailed feature descriptions
- **Pricing** (`/pricing`) - Subscription plans and pricing
- **FAQ** (`/faq`) - Frequently asked questions
- **Privacy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service
- **Changelog** (`/changelog`) - Product updates and releases
- **Press** (`/press`) - Press kit and media resources

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app is built with Next.js and can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Performance

The website is optimized for performance with:
- Static generation where possible
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size
- Optimized CSS with TailwindCSS

## 🔍 SEO Features

- Complete metadata setup
- Open Graph and Twitter Card support
- Structured data (Schema.org)
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML structure

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios
- Focus indicators
- Semantic HTML elements

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support, email support@tangerine-extension.com or visit our [FAQ page](/faq).