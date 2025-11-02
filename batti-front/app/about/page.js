"use client";

import styles from "@/styles/about/About.module.css";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, Sparkles, MapPin, Star } from "lucide-react";


export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className={styles.main}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.overlay}>
          <h1>About Batti</h1>
          <p>Where modern convenience meets creativity and care.</p>
        </div>
      </motion.section>

      {/* BRAND STORY */}
      <motion.section
        className={styles.story}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.storyImage}>
          <img src="/about-store.jpg" alt="Batti store interior" />
        </div>
        <div className={styles.storyText}>
          <h2>Our Story</h2>
          <p>
            Batti began with a simple idea — to bring together the best of everyday
            essentials and joyful products in one friendly space. From beauty to
            stationery, every shelf in Batti is curated to inspire creativity,
            self-care, and happiness.
          </p>
          <p>
            Today, we’re proud to be more than just a store — we’re a lifestyle hub
            where people come to discover, connect, and smile.
          </p>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        className={styles.features}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>What We Offer</h2>
        <div className={styles.grid}>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={styles.card}
          >
            <Sparkles size={36} color="var(--color-yellow)" />
            <h3>Beauty & Care</h3>
            <p>Hair-care, skincare, and nail-care products from trusted brands.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={styles.card}
          >
            <ShoppingBag size={36} color="var(--color-pink)" />
            <h3>Stationery & Gifts</h3>
            <p>Adorable stationery, souvenirs, and DIY toys for creative minds.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={styles.card}
          >
            <Heart size={36} color="var(--color-light-blue)" />
            <h3>Home & Lifestyle</h3>
            <p>Functional, cute, and colorful home accessories and utensils.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* GALLERY */}
      <motion.section
        className={styles.gallery}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Life at Batti</h2>
        <div className={styles.galleryGrid}>
          <img src="/gallery1.jpg" alt="Beauty section" />
          <img src="/gallery2.jpg" alt="Stationery wall" />
          <img src="/gallery3.jpg" alt="Gift corner" />
          <img src="/gallery4.jpg" alt="Store exterior" />
        </div>
      </motion.section>

      {/* TESTIMONIALS */}
      <motion.section
        className={styles.testimonials}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>What Our Customers Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <Star size={20} color="var(--color-yellow)" />
            <p>“Love the vibe and selection at Batti! Everything feels so fresh and happy.”</p>
            <span>— Anujin T.</span>
          </div>
          <div className={styles.testimonialCard}>
            <Star size={20} color="var(--color-yellow)" />
            <p>“My go-to place for gifts and cute stationery. Highly recommend!”</p>
            <span>— Bat-Erdene S.</span>
          </div>
          <div className={styles.testimonialCard}>
            <Star size={20} color="var(--color-yellow)" />
            <p>“The staff is so kind and helpful. Every visit is a good experience.”</p>
            <span>— Enkhzul B.</span>
          </div>
        </div>
      </motion.section>

      {/* VISIT */}
      <motion.section
        className={styles.visit}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
      >
        <h2>Visit or Contact Us</h2>
        <p>
          You can find us in Ulaanbaatar — or browse our online catalog anytime.
          Follow us on Instagram <strong>@batti.store</strong> for new arrivals.
        </p>
        <motion.div
          className={styles.mapPlaceholder}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <MapPin size={40} color="var(--color-light-yellow)" />
          <span>Map location coming soon...</span>
        </motion.div>
      </motion.section>
    </main>
  );
}
