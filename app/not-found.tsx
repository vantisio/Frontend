import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SystemPageContainer } from "@/components/system/system-page-container";
import { ErrorCard } from "@/components/system/error-card";
import { StatusHeading } from "@/components/system/status-heading";
import { StatusDescription } from "@/components/system/status-description";
import { ActionButtons } from "@/components/system/action-buttons";

export const metadata: Metadata = {
  title: "۴۰۴ - صفحه موردنظر پیدا نشد | Vantis",
  description:
    "صفحه موردنظر شما پیدا نشد. ممکن است آدرس تغییر کرده باشد یا این صفحه دیگر وجود نداشته باشد.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <SystemPageContainer>
      <ErrorCard>
        <StatusHeading>۴۰۴</StatusHeading>
        <StatusDescription>صفحه موردنظر پیدا نشد</StatusDescription>
        <StatusDescription className="text-base text-text-muted">
          ممکن است آدرس تغییر کرده باشد یا این صفحه دیگر وجود نداشته باشد.
        </StatusDescription>
        <ActionButtons>
          <Link href="/">
            <Button variant="primary" size="lg">
              بازگشت به صفحه اصلی
            </Button>
          </Link>
        </ActionButtons>
      </ErrorCard>
    </SystemPageContainer>
  );
}
