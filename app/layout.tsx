import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Vazirmatn } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { IntlProviderWrapper } from '@/components/providers/intl-provider-wrapper';
import Schema from './schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  variable: '--font-persian',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Vantis - ذهن‌ها به وب می‌آیند',
  description: 'شرکتی با اولویت مهندسی که محصولات نرم‌افزاری جاه‌طلبانه می‌سازد',
  keywords: ['وانتس', 'مهندسی نرم‌افزار', 'تکنولوژی', 'استارتاپ', 'محصولات دیجیتال'],
  authors: [{ name: 'Vantis' }],
  creator: 'Vantis',
  publisher: 'Vantis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vantis.io'),
  alternates: {
    canonical: '/',
    languages: {
      'fa-IR': '/fa',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://vantis.io',
    title: 'Vantis - ذهن‌ها به وب می‌آیند',
    description: 'شرکتی با اولویت مهندسی که محصولات نرم‌افزاری جاه‌طلبانه می‌سازد',
    siteName: 'Vantis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vantis - ذهن‌ها به وب می‌آیند',
    description: 'شرکتی با اولویت مهندسی که محصولات نرم‌افزاری جاه‌طلبانه می‌سازد',
    creator: '@vantis',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <Schema />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${vazirmatn.variable}`}>
        <IntlProviderWrapper>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {children}
          </ThemeProvider>
        </IntlProviderWrapper>
      </body>
    </html>
  );
}
