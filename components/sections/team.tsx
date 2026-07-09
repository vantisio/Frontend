"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem } from "@/animations/variants";
import { TeamMember } from "@/types";

const engineers: TeamMember[] = [
  {
    name: "کیان هاشمی",
    role: "Backend & Systems Developer",
    description: "تمرکز بر توسعه محصول از لایه رابط کاربری تا بک‌اند.",
    expertise: [
      "Backend Development",
      "Systems Design",
      "Distributed Systems",
      "Algorithms & Optimization",
    ],
    github: "https://github.com/mrgray8",
    linkedin: "https://www.linkedin.com/in/kiyan-hashemi-756312219",
    email: "kiyan.hashemi2001@gmail.com",
    image: "/images/team/kiyan.png",
  },
  {
    name: "محمد رمضانی",
    role: "Full Stack Engineer",
    description: "طراحی و مهندسی رابط‌های کاربری ممتاز با دقت و هدفمندی.",
    expertise: [
      "Design Systems",
      "Web Performance",
      "APIs & Microservices",
      "Databases",
      "AI Tooling",
      "Typography",
      "Open Source",
    ],
    github: "https://github.com/DaRiaN0Dev",
    linkedin: "https://www.linkedin.com/in/DaRiaN0Dev",
    email: "mohammadramezani.work@gmail.com",
    image: "/images/team/mohammad.png",
  },
];

export function Team() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      id="team"
      aria-labelledby="team-title"
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
            id="team-title"
            className="font-persian text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-6"
          >
            تیم مهندسی
          </h2>
          <p className="font-persian text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            مهندسانی که آینده را می‌سازند
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {engineers.map((engineer) => (
            <motion.div
              key={engineer.name}
              variants={staggerItem}
              className="group"
            >
              <article className="h-full p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 to-card/30 hover:from-card hover:to-card/80 hover:border-border-strong transition-all duration-200 flex flex-col">
                {/* Header with avatar and info */}
                <div className="flex items-start gap-6 mb-8">
                  {/* Avatar */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-border/50 flex-shrink-0">
                    <Image
                      src={engineer.image}
                      alt={engineer.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                      priority={engineer.name === "کیان هاشمی"}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-persian text-xl font-semibold text-text-primary mb-2">
                      {engineer.name}
                    </h3>
                    <p className="font-persian text-sm text-accent-primary font-medium mb-3">
                      {engineer.role}
                    </p>
                    <p className="font-persian text-text-muted text-sm leading-relaxed">
                      {engineer.description}
                    </p>
                  </div>
                </div>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {engineer.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-accent-primary/10 text-accent-primary text-xs font-medium font-mono border border-accent-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact links */}
                <div className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <a
                      href={engineer.github}
                      className="flex-1 group relative flex items-center justify-center gap-2.5 p-3 rounded-xl border border-border/40 bg-background/50 hover:bg-background hover:border-border-strong hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                      aria-label={`${engineer.name} GitHub profile`}
                    >
                      <Github className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors duration-200 shrink-0" />
                      <span className="font-persian text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                        GitHub
                      </span>
                    </a>

                    <a
                      href={engineer.linkedin}
                      className="flex-1 group relative flex items-center justify-center gap-2.5 p-3 rounded-xl border border-border/40 bg-background/50 hover:bg-background hover:border-border-strong hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                      aria-label={`${engineer.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors duration-200 shrink-0" />
                      <span className="font-persian text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                        LinkedIn
                      </span>
                    </a>

                    <a
                      href={`mailto:${engineer.email}`}
                      className="flex-1 group relative flex items-center justify-center gap-2.5 p-3 rounded-xl border border-border/40 bg-background/50 hover:bg-background hover:border-border-strong hover:shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-2 focus:ring-offset-background"
                      aria-label={`Email ${engineer.name}`}
                    >
                      <Mail className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors duration-200 shrink-0" />
                      <span className="font-persian text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                        Email
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
