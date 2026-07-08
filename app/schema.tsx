export default function Schema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Vantis',
    description: 'شرکتی با اولویت مهندسی که محصولات نرم‌افزاری جاه‌طلبانه می‌سازد',
    url: 'https://vantis.io',
    logo: 'https://vantis.io/logo.png',
    sameAs: [
      'https://twitter.com/vantis',
      'https://linkedin.com/company/vantis',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@vantis.io',
      contactType: 'sales',
      availableLanguage: 'Persian',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
