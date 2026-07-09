"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { philosophyPrinciples } from "./philosophy-data";
import { getIcon } from "@/lib/icons";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/variants";

export function Philosophy() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/30 to-background"
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
            id="philosophy-title"
            className="font-persian text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6"
          >
            چرا ونتیس؟
          </h2>
          <p className="font-persian text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            ما با اصول مهندسی سخت‌گیرانه، محصولاتی می‌سازیم که آینده تکنولوژی را
            شکل می‌دهند
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {philosophyPrinciples.map((principle) => {
            const Icon = getIcon(principle.icon);
            return (
              <motion.div
                key={principle.title}
                variants={staggerItem}
                className="group"
              >
                <article className="h-full p-6 sm:p-8 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:border-border-strong transition-all duration-200">
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-200">
                      <Icon className="w-6 h-6 text-accent-primary" />
                    </div>
                  </div>
                  <h3 className="font-persian text-lg sm:text-xl font-semibold text-text-primary mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-persian text-sm sm:text-base text-text-muted leading-relaxed">
                    {principle.description}
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
