'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DocSidebar, NavItem } from '@/components/documentation/doc-sidebar';
import { ReadingProgress } from '@/components/documentation/reading-progress';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface DocumentationLayoutProps {
  navigation: NavItem[];
  children: React.ReactNode;
  containerId?: string;
}

export function DocumentationLayout({
  navigation,
  children,
  containerId = 'main-content',
}: DocumentationLayoutProps) {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string>();

  // Scrollspy implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -70% 0px',
      }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <ReadingProgress containerId={containerId} />

      <div className="min-h-screen bg-background">
        <Container className="flex gap-8 pt-6">
          {/* Sidebar - right side for RTL with back button */}
          <div className="hidden lg:block w-72 shrink-0 sticky top-24 self-start">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push('/')}
              className="mb-4 font-persian text-sm text-text-secondary hover:text-text-primary w-full justify-start"
            >
              <ArrowRight className="w-4 h-4 ml-2" />
              بازگشت به سایت
            </Button>
            <DocSidebar
              navigation={navigation}
              activeId={activeId}
              onItemClick={handleNavClick}
            />
          </div>

          {/* Main content */}
          <div id={containerId} className="flex-1 min-w-0">
            {children}
          </div>
        </Container>
      </div>

      {/* Mobile sidebar drawer */}
      <DocSidebar
        navigation={navigation}
        activeId={activeId}
        onItemClick={handleNavClick}
        mobileOnly
      />
    </>
  );
}
