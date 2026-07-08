'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-persian text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {t('title')}
          </h2>
          <p className="font-persian text-xl text-text-secondary mb-8">
            {t('subtitle')}
          </p>
          <p className="font-persian text-lg text-text-muted mb-12 leading-relaxed">
            {t('description')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href={`mailto:${t('email')}`}
              className="flex items-center gap-3 text-text-primary hover:text-accent-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="font-persian text-lg">{t('email')}</span>
            </a>
            <Button size="lg" className="font-persian">
              {t('cta')}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
