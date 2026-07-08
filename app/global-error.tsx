'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head />
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#0a0a0a',
        color: '#fafafa',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          maxWidth: '600px',
        }}>
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 700,
            margin: '0 0 1rem 0',
            letterSpacing: '-0.02em',
          }}>
            خطای سیستمی
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: '#a3a3a3',
            margin: '0 0 0.5rem 0',
            lineHeight: 1.6,
          }}>
            یک خطای غیرمنتظره در برنامه رخ داده است.
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#525252',
            margin: '0 0 2rem 0',
            lineHeight: 1.6,
          }}>
            لطفاً صفحه را رفرش کنید یا بعداً دوباره تلاش کنید.
          </p>
        </div>
      </body>
    </html>
  );
}
