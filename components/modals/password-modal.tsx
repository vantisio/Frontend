'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { easing } from '@/animations/variants';

interface PasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (password: string) => void;
  isLoading?: boolean;
  error?: string | null;
}

export function PasswordModal({ isOpen, onClose, onSubmit, isLoading = false, error = null }: PasswordModalProps) {
  const [password, setPassword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isLoading) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen, onClose, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      onSubmit(password);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easing }}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: easing }}
              className="relative w-full max-w-md bg-card border border-border/50 rounded-2xl shadow-xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                disabled={isLoading}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-card transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-primary disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="بستن"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>

              {/* Content */}
              <div className="pt-2">
                <h2
                  id="modal-title"
                  className="font-persian text-xl sm:text-2xl font-bold text-text-primary mb-2"
                >
                  احراز هویت
                </h2>
                <p className="font-persian text-sm text-text-muted mb-6">
                  برای دسترسی به مستندات محرمانه، لطفاً رمز عبور را وارد کنید.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block font-persian text-sm font-medium text-text-primary mb-2"
                    >
                      رمز عبور
                    </label>
                    <input
                      ref={inputRef}
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="رمز عبور را وارد کنید"
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed font-persian"
                      autoComplete="current-password"
                      aria-describedby={error ? "password-error" : undefined}
                    />
                    {error && (
                      <p
                        id="password-error"
                        className="mt-2 font-persian text-sm text-danger"
                        role="alert"
                      >
                        {error}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      disabled={isLoading}
                      className="flex-1 font-persian"
                    >
                      لغو
                    </Button>
                    <Button
                      type="submit"
                      disabled={!password.trim() || isLoading}
                      className="flex-1 font-persian"
                    >
                      {isLoading ? 'در حال بررسی...' : 'ادامه'}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
