'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Users, Zap } from 'lucide-react';
import { fadeUp, staggerContainer, staggerItem } from '@/animations/variants';
import { Product } from '@/types';

const products: Product[] = [
  {
    title: 'Vantis Core',
    category: 'زیرساخت',
    description: 'پلتفرم زیرساختی که اتوماسیون سازمانی را در مقیاس بزرگ ممکن می‌کند. با معماری میکروسرویس و قابلیت مقیاس‌پذیری افقی، Core می‌تواند میلیون‌ها درخواست را در ثانیه پردازش کند.',
    accent: 'accent-primary',
    cta: 'مشخصات فنی',
    features: [
      { icon: 'Zap', text: 'پردازش ۱۰M+ درخواست در ثانیه' },
      { icon: 'Database', text: 'معماری مقیاس‌پذیر افقی' },
    ],
  },
  {
    title: 'Vantis Social',
    category: 'تکنولوژی اجتماعی',
    description: 'پلتفرم شبکه‌سازی مدرن برای تیم‌های تکنولوژی. با تمرکز بر ارتباطات حرفه‌ای و همکاری بلادرنگ، Social فضایی امن و کارآمد برای تعامل تیم‌های مهندسی فراهم می‌کند.',
    accent: 'accent-secondary',
    cta: 'معماری محصول',
    features: [
      { icon: 'Users', text: 'همکاری بلادرنگ' },
      { icon: 'Zap', text: 'اتصال کم‌تأخیر' },
    ],
  },
];

const iconMap = {
  Database,
  Users,
  Zap,
};

export function Products() {
  const router = useRouter();

  const handleProductClick = (productTitle: string) => {
    if (productTitle === 'Vantis Core') {
      router.push('/products/core');
    } else if (productTitle === 'Vantis Social') {
      router.push('/products/social');
    }
  };

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" id="products" aria-labelledby="products-title">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/20 to-background" aria-hidden="true" />
      
      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 id="products-title" className="font-persian text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6">
            محصولات ما
          </h2>
          <p className="font-persian text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            زیرساخت‌های نرم‌افزاری که آینده را می‌سازند
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {products.map((product) => {
            const isPrimary = product.accent === 'accent-primary';
            
            return (
              <motion.div
                key={product.title}
                variants={staggerItem}
                className="group"
              >
                <article className={`h-full p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-${product.accent}/50 transition-all duration-200 relative overflow-hidden`}>
                  {/* Accent glow */}
                  <div 
                    className={`absolute top-0 right-0 w-64 h-64 bg-${product.accent}/5 rounded-full blur-3xl group-hover:bg-${product.accent}/10 transition-all duration-200`} 
                    aria-hidden="true"
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-${product.accent}/10 flex items-center justify-center`}>
                          {product.title === 'Vantis Core' && <Database className={`w-6 h-6 text-${product.accent}`} />}
                          {product.title === 'Vantis Social' && <Users className={`w-6 h-6 text-${product.accent}`} />}
                        </div>
                        <div>
                          <span className={`font-persian text-sm text-${product.accent} font-medium`}>{product.category}</span>
                          <h3 className="font-persian text-xl sm:text-2xl font-bold text-text-primary">{product.title}</h3>
                        </div>
                      </div>
                    </div>

                    <p className="font-persian text-text-muted leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                      {product.description}
                    </p>

                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {product.features.map((feature) => {
                        const Icon = iconMap[feature.icon as keyof typeof iconMap];
                        return (
                          <div key={feature.text} className="flex items-baseline gap-3">
                            <Icon className={`w-5 h-5 text-${product.accent} shrink-0`} />
                            <span className="font-persian text-text-secondary text-sm sm:text-base leading-none">{feature.text}</span>
                          </div>
                        );
                      })}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => handleProductClick(product.title)}
                      className={`group-hover:bg-${product.accent} group-hover:text-white group-hover:border-${product.accent} group-hover:shadow-sm dark:group-hover:bg-${product.accent}/90 transition-all duration-200 font-persian w-full sm:w-auto`}
                    >
                      {product.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
