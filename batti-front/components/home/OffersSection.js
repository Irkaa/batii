"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "@/styles/home/OffersSection.module.css";

export default function OffersSection() {
  return (
    <motion.section
      className={styles.offers}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Special Offers</h2>
      <div className={styles.offerBanner}>
        <p>🎉 20% OFF on all Stationery this week!</p>
        <Link href="/products#stationery" className={styles.offerBtn}>
          Shop Now
        </Link>
      </div>
    </motion.section>
  );
}
