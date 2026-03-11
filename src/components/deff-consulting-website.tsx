"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cloud,
  Database,
  BrainCircuit,
  Mail,
  X,
  Menu,
  Eye,
  Cpu,
  Workflow,
  Waves,
  PieChart,
  ShieldCheck,
  GraduationCap,
} from "lucide-react";

/* ─────────── animation helpers ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────── icon maps (order matches dictionary items) ─────────── */
const serviceIcons = [Cloud, Database, BrainCircuit];
const successCaseIcons = [
  Cpu, Cloud, BrainCircuit, Workflow, Waves, PieChart, Eye, ShieldCheck, GraduationCap,
];

/* ─────────── component ─────────── */
export default function DeffConsultingWebsite({
  dictionary,
  locale,
}: {
  dictionary: any;
  locale: string;
}) {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const t = dictionary;

  const services = t.services.items.map(
    (item: { title: string; desc: string }, i: number) => ({
      icon: serviceIcons[i],
      title: item.title,
      desc: item.desc,
    })
  );

  const successCases = t.success_cases.items.map(
    (item: { title: string; desc: string }, i: number) => ({
      icon: successCaseIcons[i],
      title: item.title,
      desc: item.desc,
    })
  );

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.success_cases, href: "#success-cases" },
    { label: t.nav.about, href: "#about" },
  ];

  const titleWords = t.hero.title.split(" ");
  const titleMain = titleWords.slice(0, -2).join(" ");
  const titleHighlight = titleWords.slice(-2).join(" ");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-[#0a1f44] text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center font-extrabold text-lg tracking-tight">
              DC
            </div>
            <span className="text-xl font-bold tracking-tight">
              DEFF Consulting
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Locale switcher */}
            <div className="flex items-center gap-2 border-l border-white/20 ml-1 pl-4">
              <Link
                href={pathname.replace(`/${locale}`, "/en")}
                className={`text-sm font-semibold transition-colors ${
                  locale === "en" ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href={pathname.replace(`/${locale}`, "/es")}
                className={`text-sm font-semibold transition-colors ${
                  locale === "es" ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                ES
              </Link>
            </div>

            <Button
              size="sm"
              className="bg-white text-[#0a1f44] hover:bg-white/90 font-semibold"
              onClick={() => setContactOpen(true)}
            >
              {t.nav.contact}
            </Button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-[#0a1f44] border-t border-white/10 px-6 pb-4"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block py-2 text-sm font-semibold text-white/80 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}

            {/* Mobile locale switcher */}
            <div className="flex items-center gap-3 py-2 border-t border-white/10 mt-2">
              <Link
                href={pathname.replace(`/${locale}`, "/en")}
                className={`text-sm font-semibold transition-colors ${
                  locale === "en" ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </Link>
              <span className="text-white/30">|</span>
              <Link
                href={pathname.replace(`/${locale}`, "/es")}
                className={`text-sm font-semibold transition-colors ${
                  locale === "es" ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                ES
              </Link>
            </div>

            <Button
              size="sm"
              className="mt-2 w-full bg-white text-[#0a1f44] hover:bg-white/90 font-semibold"
              onClick={() => {
                setContactOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              {t.nav.contact}
            </Button>
          </motion.div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="gradient-hero grid-pattern relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center px-6 py-24 md:py-32">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0a1f44] mb-6 leading-tight"
          >
            {titleMain}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1f44] to-[#1e40af]">
              {titleHighlight}
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#0a1f44]/70 max-w-2xl mx-auto mb-10"
          >
            {t.hero.subtitle}
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[#0a1f44] text-white hover:bg-[#0a1f44]/90 text-base font-semibold shadow-lg"
              onClick={() => setContactOpen(true)}
            >
              {t.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-[#0a1f44] mb-4"
          >
            {t.services.title}
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            {t.services.description}
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((s: { icon: React.ElementType; title: string; desc: string }, i: number) => (
              <motion.div key={s.title} custom={i} variants={fadeUp}>
                <Card className="h-full border-border bg-muted/40 hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#0a1f44] flex items-center justify-center mx-auto mb-5">
                      <s.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Success Cases ── */}
      <section
        id="success-cases"
        className="scroll-mt-20 py-20 bg-background gradient-section"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-[#0a1f44] mb-4"
          >
            {t.success_cases.title}
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            {t.success_cases.description}
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {successCases.map((c: { icon: React.ElementType; title: string; desc: string }, i: number) => (
              <motion.div key={c.title} custom={i} variants={fadeUp}>
                <Card className="h-full border-border bg-white hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-[#e0f0ff] flex items-center justify-center mb-4">
                      <c.icon className="w-5 h-5 text-[#0a1f44]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0a1f44] mb-2">
                      {c.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {c.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="scroll-mt-20 py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center text-[#0a1f44] mb-8"
          >
            {t.about.title}
          </motion.h2>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-foreground/80 text-lg leading-relaxed"
          >
            {t.about.paragraphs.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>

          {/* Expertise badges */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {t.about.tags.map((tag: string, i: number) => (
              <motion.span
                key={tag}
                custom={i}
                variants={fadeUp}
                className="px-4 py-2 rounded-full bg-[#e0f0ff] text-[#0a1f44] text-sm font-semibold"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#0a1f44] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-3">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} DEFF Consulting. {t.footer.rights}
          </p>
          <p className="text-sm">
            {t.footer.contact_text}{" "}
            <a
              href={`mailto:${t.contact.email}`}
              className="text-[#7dc4ff] hover:underline"
            >
              {t.contact.email}
            </a>
          </p>
        </div>
      </footer>

      {/* ── Contact Modal ── */}
      {contactOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setContactOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setContactOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={22} />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0a1f44] flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0a1f44]">
                {t.contact.title}
              </h3>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (
                  form.elements.namedItem("name") as HTMLInputElement
                ).value;
                const email = (
                  form.elements.namedItem("email") as HTMLInputElement
                ).value;
                const message = (
                  form.elements.namedItem("message") as HTMLTextAreaElement
                ).value;
                window.location.href = `mailto:${t.contact.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                setContactOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.name_label}
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.name_placeholder}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/20 focus:border-[#0a1f44] transition-colors text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.email_label}
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.email_placeholder}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/20 focus:border-[#0a1f44] transition-colors text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.contact.message_label}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder={t.contact.message_placeholder}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/20 focus:border-[#0a1f44] transition-colors resize-none text-gray-900"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#0a1f44] text-white hover:bg-[#0a1f44]/90 font-semibold"
              >
                {t.contact.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
