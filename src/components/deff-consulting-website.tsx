"use client";

import React, { useState } from "react";
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
  CheckCircle,
  Eye,
  Cpu,
  BarChart3,
  Workflow,
  Waves,
  PieChart,
  ShieldCheck,
  CreditCard,
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

/* ─────────── data ─────────── */
const services = [
  {
    icon: Cloud,
    title: "Cloud Transformation",
    desc: "We help businesses migrate, manage, and scale their cloud infrastructure efficiently and securely.",
  },
  {
    icon: Database,
    title: "Data Strategy",
    desc: "Design and implement modern data pipelines, analytics, and governance models to extract value from your data.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    desc: "Leverage AI and intelligent automation to optimize operations and improve decision-making.",
  },
];

const successCases = [
  {
    icon: Cpu,
    title: "AI-Powered Soft Skills Coach Chatbot",
    desc: "Designed and deployed an AI-driven chatbot using RAG architecture, integrated with Slack and Azure Speech Services. Deployed on AKS with Cosmos DB for data storage.",
  },
  {
    icon: Cloud,
    title: "Infrastructure Automation with Terraform and AWS",
    desc: "Automated multi-account AWS environments using Terraform. Implemented CI/CD pipelines and managed infrastructure deployments with GitOps workflows.",
  },
  {
    icon: BrainCircuit,
    title: "ML System on GCP",
    desc: "Built a scalable ML system on Google Cloud Platform using Vertex AI, BigQuery, and Cloud Functions. Supported batch and real-time inference with monitoring and alerting.",
  },
  {
    icon: Workflow,
    title: "Data Pipelines on Databricks & Airflow",
    desc: "Developed reliable data pipelines using PySpark on Databricks and orchestrated with Airflow for a global retail client. Ensured data quality and lineage with robust testing.",
  },
  {
    icon: Waves,
    title: "Streaming Analytics with Kafka and Flink",
    desc: "Designed real-time analytics platform for event processing using Kafka and Apache Flink. Delivered insights with sub-second latency for a fintech company.",
  },
  {
    icon: PieChart,
    title: "Power BI Analytics Dashboard for Retail",
    desc: "Built interactive dashboards in Power BI to track key retail KPIs, enabling store managers to optimize inventory, marketing, and operations across regions.",
  },
  {
    icon: Eye,
    title: "Computer Vision for Oil & Gas",
    desc: "Implemented a computer vision solution to detect equipment anomalies using deep learning models. Improved inspection efficiency and reduced downtime significantly.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection for Banking",
    desc: "Developed real-time fraud detection models with ensemble learning techniques on large-scale transaction data, deployed to monitor suspicious activity continuously.",
  },
  {
    icon: GraduationCap,
    title: "EdTech NLP Platform",
    desc: "Built an NLP-based Q&A platform for an EdTech company, applying transformer models to extract answers from learning content and personalize study paths for students.",
  },
];

/* ─────────── component ─────────── */
export default function DeffConsultingWebsite() {
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Success Cases", href: "#success-cases" },
    { label: "About", href: "#about" },
  ];

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
            <Button
              size="sm"
              className="bg-white text-[#0a1f44] hover:bg-white/90 font-semibold"
              onClick={() => setContactOpen(true)}
            >
              Contact
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
            <Button
              size="sm"
              className="mt-2 w-full bg-white text-[#0a1f44] hover:bg-white/90 font-semibold"
              onClick={() => {
                setContactOpen(true);
                setMobileMenuOpen(false);
              }}
            >
              Contact
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
            Empowering Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a1f44] to-[#1e40af]">
              Digital Future
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#0a1f44]/70 max-w-2xl mx-auto mb-10"
          >
            Technology solutions tailored to your business goals. Let&apos;s
            innovate together.
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
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
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
            Our Services
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            End-to-end technology consulting to accelerate your business
            transformation.
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((s, i) => (
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
            Success Cases
          </motion.h2>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            Real-world impact across diverse industries.
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {successCases.map((c, i) => (
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
            About Us
          </motion.h2>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-foreground/80 text-lg leading-relaxed"
          >
            <p>
              We are a team of professionals with a multidisciplinary foundation
              and a proven track record across diverse industries. With
              backgrounds ranging from physics and economics to computer science,
              our core expertise lies in problem-solving, effective
              communication, and teamwork. We specialize in developing reliable,
              data-driven solutions with substantial experience in machine
              learning, including time-series analysis, computer vision, and
              natural language processing.
            </p>
            <p>
              As self-motivated learners, we have mastered advanced topics such
              as artificial intelligence and cloud computing. Our portfolio
              includes hands-on projects for the retail, banking, finance,
              healthcare, oil &amp; gas, energy, govtech, and edtech sectors. We
              bridge the gap between technical and non-technical stakeholders,
              and we are proficient in leading cloud platforms such as GCP,
              Azure, AWS, and IBM Cloud.
            </p>
          </motion.div>

          {/* Expertise badges */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              "GCP",
              "Azure",
              "AWS",
              "IBM Cloud",
              "Machine Learning",
              "NLP",
              "Computer Vision",
              "Time-Series",
              "Terraform",
              "Databricks",
              "Kafka",
              "Power BI",
            ].map((tag, i) => (
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
            &copy; {new Date().getFullYear()} DEFF Consulting. All rights
            reserved.
          </p>
          <p className="text-sm">
            Contact us at{" "}
            <a
              href="mailto:daniel.eduardo.fajardo@protonmail.com"
              className="text-[#7dc4ff] hover:underline"
            >
              daniel.eduardo.fajardo@protonmail.com
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
                Get in Touch
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
                window.location.href = `mailto:daniel.eduardo.fajardo@protonmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
                setContactOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/20 focus:border-[#0a1f44] transition-colors text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/20 focus:border-[#0a1f44] transition-colors text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1f44]/20 focus:border-[#0a1f44] transition-colors resize-none text-gray-900"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#0a1f44] text-white hover:bg-[#0a1f44]/90 font-semibold"
              >
                Send Message <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
