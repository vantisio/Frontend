"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PasswordModal } from "@/components/modals/password-modal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/variants";
import { getIcon } from "@/lib/icons";

const investorDocuments = [
  {
    title: "پروپوزال Core",
    description:
      "مستندات کامل سرمایه‌گذاری برای Vantis Core شامل تحلیل بازار، مدل درآمدی و چشم‌انداز فنی",
    icon: "FileText",
    accent: "accent-primary",
    cta: "مشاهده پروپوزال",
    route: "/docs/core",
  },
  {
    title: "پروپوزال Social",
    description:
      "مستندات سرمایه‌گذاری برای Vantis Social با تمرکز بر بازار شبکه‌سازی اجتماعی حرفه‌ای",
    icon: "BarChart",
    accent: "accent-secondary",
    cta: "مشاهده پروپوزال",
    route: "/docs/social",
  },
];

const investorHighlights = [
  {
    icon: "Building2",
    text: "مستندات فنی کامل",
  },
  {
    icon: "TrendingUp",
    text: "تحلیل بازار دقیق",
  },
  {
    icon: "FileText",
    text: "مدل درآمدی شفاف",
  },
];

export function Investors() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if redirected from protected route via middleware
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      setSelectedRoute(redirect);
      setIsModalOpen(true);
      // Clean URL without page reload
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const handleButtonClick = (route: string) => {
    setSelectedRoute(route);
    setIsModalOpen(true);
    setError(null);
  };

  const handlePasswordSubmit = async (password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Call appropriate route handler based on selected route
      const authEndpoint =
        selectedRoute === "/docs/core" ? "/api/auth/core" : "/api/auth/social";

      const response = await fetch(authEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsModalOpen(false);
        if (selectedRoute) {
          router.push(selectedRoute);
        }
      } else {
        setError(data.error || "رمز عبور اشتباه است");
      }
    } catch (error) {
      setError("خطا در پردازش درخواست");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section
        className="py-24 sm:py-32 relative overflow-hidden"
        id="investors"
        aria-labelledby="investors-title"
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
              id="investors-title"
              className="font-persian text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6"
            >
              همکاری با وانتیس
            </h2>
            <p className="font-persian text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
              فرصت سرمایه‌گذاری در آینده تکنولوژی
            </p>
          </motion.div>

          {/* Document Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16"
          >
            {investorDocuments.map((doc) => {
              const Icon = getIcon(doc.icon);
              return (
                <motion.div
                  key={doc.title}
                  variants={staggerItem}
                  className="group"
                >
                  <article className="h-full p-6 sm:p-8 lg:p-10 rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 hover:border-border-strong transition-all duration-200 relative overflow-hidden">
                    {/* Document-style header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-${doc.accent}/10 flex items-center justify-center`}
                        >
                          <Icon
                            className={`w-6 h-6 sm:w-7 sm:h-7 text-${doc.accent}`}
                          />
                        </div>
                        <div>
                          <h3 className="font-persian text-xl sm:text-2xl font-bold text-text-primary mb-1">
                            {doc.title}
                          </h3>
                          <span className="font-persian text-sm text-text-muted">
                            مستند سرمایه‌گذاری
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="font-persian text-text-muted leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                      {doc.description}
                    </p>

                    <Button
                      variant="outline"
                      onClick={() => handleButtonClick(doc.route)}
                      className={`group-hover:bg-${doc.accent} group-hover:text-white group-hover:border-${doc.accent} group-hover:shadow-sm dark:group-hover:bg-${doc.accent}/90 transition-all duration-200 font-persian w-full sm:w-auto`}
                    >
                      {doc.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:-translate-x-1 transition-transform duration-200" />
                    </Button>
                  </article>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {investorHighlights.map((highlight) => {
              const Icon = getIcon(highlight.icon);
              return (
                <motion.div
                  key={highlight.text}
                  variants={staggerItem}
                  className="flex items-center gap-4 p-6 rounded-xl border border-border/30 bg-card/30"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <span className="font-persian text-base sm:text-lg font-medium text-text-primary">
                    {highlight.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePasswordSubmit}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}
