'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function About() {
  const t = useTranslations('about');
  const values = t.raw('values') as Array<{ title: string; description: string }>;

  return (
    <Section variant="muted" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-persian text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {t('title')}
          </h2>
          <p className="font-persian text-xl text-text-secondary mb-8">
            {t('subtitle')}
          </p>
          <p className="font-persian text-lg text-text-muted leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-accent-primary-soft flex items-center justify-center">
                  <span className="text-accent-primary font-bold text-lg">{index + 1}</span>
                </div>
              </div>
              <h3 className="font-persian text-xl font-semibold text-text-primary mb-2">
                {value.title}
              </h3>
              <p className="font-persian text-text-muted leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
