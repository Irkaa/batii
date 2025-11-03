"use client";

import { motion } from "framer-motion";
import styles from "@/styles/home/NewsletterSection.module.css";

export default function NewsletterSection() {
  return (
    <motion.section
      className={styles.newsletter}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Join Our Community</h2>
      <p>Get updates on new arrivals, discounts, and more!</p>
      <form className={styles.form}>
        <input type="email" placeholder="Enter your email" required />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className={styles.button}
        >
          Subscribe
        </motion.button>
      </form>
    </motion.section>
  );
}
