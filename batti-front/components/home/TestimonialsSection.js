"use client";

import { motion } from "framer-motion";
import styles from "@/styles/home/TestimonialsSection.module.css";

export default function TestimonialsSection() {
  return (
    <motion.section
      className={styles.testimonials}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Why Customers Love BATTI</h2>
      <div className={styles.testimonialGrid}>
        <div className={styles.testimonialCard}>
          <p>“My go-to store for cute stationery and daily items!”</p>
          <span>— Anujin T.</span>
        </div>
        <div className={styles.testimonialCard}>
          <p>“Always friendly service and a lovely product selection.”</p>
          <span>— Bat-Erdene S.</span>
        </div>
        <div className={styles.testimonialCard}>
          <p>“Batti brings both quality and style — highly recommend!”</p>
          <span>— Enkhzul B.</span>
        </div>
      </div>
    </motion.section>
  );
}
