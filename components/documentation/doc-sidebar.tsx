"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { easing } from "@/animations/variants";
import { Button } from "@/components/ui/button";

export interface NavItem {
  id: string;
  title: string;
  items?: NavItem[];
}

interface DocSidebarProps {
  navigation: NavItem[];
  activeId?: string;
  onItemClick?: (id: string) => void;
  mobileOnly?: boolean;
}

export function DocSidebar({
  navigation,
  activeId,
  onItemClick,
  mobileOnly = false,
}: DocSidebarProps) {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Handle escape key, body scroll, focus trap, and swipe gestures
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].screenX;
      const swipeDistance = touchStartX.current - touchEndX.current;

      // Swipe left to close (positive distance means left swipe)
      if (swipeDistance > 100) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', trapFocus);
      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = 'hidden';
      // Focus first element when drawer opens
      setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as HTMLElement;
        firstFocusable?.focus();
      }, 100);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('keydown', trapFocus);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchend', handleTouchEnd);
        document.body.style.overflow = '';
      };
    }
  }, [isMobileOpen]);

  // Auto-expand parent of active item
  useEffect(() => {
    if (activeId) {
      const newExpanded = new Set<string>();
      navigation.forEach((item) => {
        if (item.items?.some((child) => child.id === activeId)) {
          newExpanded.add(item.id);
        }
      });
      setExpandedItems(newExpanded);
    }
  }, [activeId, navigation]);

  // Handle scroll detection for mobile button visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const isActive = item.id === activeId;
    const hasChildren = item.items && item.items.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.id);
            } else if (onItemClick) {
              onItemClick(item.id);
              setIsMobileOpen(false);
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 px-3 py-1.5 text-sm font-persian transition-all duration-150 relative",
            "hover:text-text-primary",
            "focus:outline-none focus:ring-2 focus:ring-accent-primary/50 rounded",
            isActive && "text-accent-primary font-medium",
            !isActive && "text-text-secondary",
          )}
          style={{ paddingRight: `${level * 12 + 12}px` }}
        >
          {isActive && (
            <motion.div
              layoutId="active-indicator"
              className="absolute right-0 top-0 bottom-0 w-0.5 bg-accent-primary"
              transition={{ duration: 0.2, ease: easing }}
            />
          )}
          {hasChildren && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2, ease: easing }}
              className="shrink-0 text-text-muted opacity-60"
            >
              <ChevronRight className="w-3 h-3" />
            </motion.div>
          )}
          <span className="flex-1 text-right">{item.title}</span>
        </button>

        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: easing }}
            className="overflow-hidden"
          >
            <div className="mt-0.5">
              {item.items?.map((child) => renderNavItem(child, level + 1))}
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile toggle - only show for mobileOnly instance and at top of page */}
      {mobileOnly && !isScrolled && (
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: easing }}
          onClick={() => setIsMobileOpen(true)}
          className="lg:hidden fixed top-24 left-4 z-40 p-2.5 bg-background/60 backdrop-blur-md border border-border/30 text-text-primary rounded-xl shadow-lg hover:bg-background/80 transition-all duration-200"
          aria-label="نمایش منو"
        >
          <Menu className="w-5 h-5" />
        </motion.button>
      )}

      <AnimatePresence>
        {/* Mobile overlay */}
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easing }}
            className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Sidebar - desktop sticky, mobile drawer */}
        <motion.aside
          ref={drawerRef}
          initial={isMobileOpen ? { x: "100%" } : false}
          animate={isMobileOpen ? { x: 0 } : false}
          exit={{ x: "100%" }}
          transition={{ duration: 0.25, ease: easing }}
          className={cn(
            "fixed lg:sticky top-0 right-0 h-screen w-72 bg-background z-50 lg:z-30",
            "flex flex-col",
            "lg:translate-x-0",
            isMobileOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0",
            mobileOnly && "lg:hidden"
          )}
        >
          {/* Mobile header */}
          <div className="flex items-center justify-between p-4 lg:hidden border-b border-border/30">
            <span className="font-persian text-lg font-semibold text-text-primary">
              ناوبری
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-card transition-colors duration-150"
              aria-label="بستن"
            >
              <X className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-0.5">
            {navigation.map((item) => renderNavItem(item))}
          </nav>

          {/* Mobile footer with back button */}
          <div className="lg:hidden border-t border-border/30 p-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setIsMobileOpen(false);
                router.push('/');
              }}
              className="w-full font-persian text-sm text-text-secondary hover:text-text-primary justify-start"
            >
              <ArrowRight className="w-4 h-4 ml-2" />
              بازگشت به سایت
            </Button>
          </div>
        </motion.aside>
      </AnimatePresence>
    </>
  );
}
