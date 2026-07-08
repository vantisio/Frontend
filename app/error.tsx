'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SystemPageContainer } from '@/components/system/system-page-container';
import { ErrorCard } from '@/components/system/error-card';
import { StatusHeading } from '@/components/system/status-heading';
import { StatusDescription } from '@/components/system/status-description';
import { ActionButtons } from '@/components/system/action-buttons';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <SystemPageContainer>
      <ErrorCard>
        <StatusHeading>خطایی رخ داد</StatusHeading>
        <StatusDescription>
          در بارگذاری این صفحه مشکلی پیش آمده است.
        </StatusDescription>
        <ActionButtons>
          <Button variant="primary" size="lg" onClick={reset}>
            تلاش مجدد
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.location.href = '/'}>
            بازگشت به صفحه اصلی
          </Button>
        </ActionButtons>
      </ErrorCard>
    </SystemPageContainer>
  );
}
