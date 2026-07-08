'use client';

import { NextIntlClientProvider } from 'next-intl';
import faMessages from '../../messages/fa.json';

export function IntlProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <NextIntlClientProvider messages={faMessages as any} locale="fa">
      {children}
    </NextIntlClientProvider>
  );
}
