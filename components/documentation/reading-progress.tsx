'use client';

import { useState, useEffect } from 'react';

interface ReadingProgressProps {
  containerId?: string;
}

export function ReadingProgress({ containerId = 'main-content' }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = container.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      const progressPercent = Math.min(Math.max(scrollPercent * 100, 0), 100);
      setProgress(progressPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerId]);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border/20 z-50">
      <div
        className="h-full bg-accent-primary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
