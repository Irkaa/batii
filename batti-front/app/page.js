"use client";

import { motion } from "framer-motion";
import styles from "@/styles/home/Home.module.css";

// Existing
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import FeaturedSection from "@/components/home/FeaturedSection";

// New
import OffersSection from "@/components/home/OffersSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <CategoriesSection />
      <FeaturedSection />
      <OffersSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
