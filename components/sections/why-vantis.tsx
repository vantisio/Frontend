"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/variants";
import { getIcon } from "@/lib/icons";

const engineeringValues = [
  {
    title: "کارایی اولویت است",
    description:
      "سیستم‌هایی که می‌سازیم باید سریع، کارآمد و بهینه باشند. ما هر خط کد را برای حداکثر کارایی بهینه می‌کنیم.",
    icon: "Zap",
  },
  {
    title: "امنیت توسط طراحی",
    description:
      "امنیت یک افزونه نیست. از روز اول در معماری سیستم تعبیه شده است. هر لایه با امنیت در نظر گرفته شده است.",
    icon: "Shield",
  },
  {
    title: "معماری مقیاس‌پذیر",
    description:
      "سیستم‌هایی که با رشد کسب‌وکار، بدون مشکل مقیاس می‌یابند. معماری ما برای رشد طراحی شده است.",
    icon: "Layers",
  },
  {
    title: "فرآیند توسعه مدرن",
    description:
      "از CI/CD تا تست‌های خودکار، ما از جدیدترین روش‌های توسعه استفاده می‌کنیم.",
    icon: "RefreshCw",
  },
  {
    title: "کد قابل نگهداری",
    description:
      "کدی که امروز می‌نویسیم، فردا باید قابل درک و تغییر باشد. تمیزی و مستندسازی جزئی از فرهنگ ماست.",
    icon: "RefreshCw",
  },
  {
    title: "سیستم‌های قابل استفاده مجدد",
    description:
      "ما کامپوننت‌ها و کتابخانه‌هایی می‌سازیم که در پروژه‌های مختلف قابل استفاده هستند.",
    icon: "Layout",
  },
  {
    title: "رابط کاربری دقیق",
    description:
      "هر پیکسل حساب شده است. طراحی ما دقیق، منظم و با تمرکز بر جزئیات است.",
    icon: "Eye",
  },
  {
    title: "دسترسی‌پذیری",
    description:
      "محصولات ما برای همه کاربران، با هر توانایی، قابل استفاده هستند. WCAG AA استاندارد ماست.",
    icon: "Keyboard",
  },
];

export function WhyVantis() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      aria-labelledby="why-vantis-title"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/20 to-background"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-20"
        >
          <h2
            id="why-vantis-title"
            className="font-persian text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6"
          >
            چرا ونتیس؟
          </h2>
          <p className="font-persian text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            ارزش‌های مهندسی که ما را متمایز می‌کند
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {engineeringValues.map((value) => {
            const Icon = getIcon(value.icon);
            return (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="group"
              >
                <article className="h-full p-6 rounded-xl border border-border/30 bg-card/30 hover:bg-card hover:border-border-strong transition-all duration-200">
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-accent-primary" />
                    </div>
                  </div>
                  <h3 className="font-persian text-base sm:text-lg font-semibold text-text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="font-persian text-sm text-text-muted leading-relaxed">
                    {value.description}
                  </p>
                </article>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
