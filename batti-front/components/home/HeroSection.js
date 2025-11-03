"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Truck, Heart, Star } from "lucide-react";
import styles from "@/styles/home/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Floating decorative items */}
      <motion.img
        src="/assets/plushie.png"
        alt="Plushie"
        className={`${styles.floating} ${styles.item1}`}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.img
        src="/assets/pen.png"
        alt="Pen"
        className={`${styles.floating} ${styles.item2}`}
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <div className={styles.heroContent}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Everyday Essentials, <br />
            <span className={styles.highlight}>All in One Place.</span>
          </h1>
          <p>
            From beauty to stationery — discover colorful, quality, and creative
            products at <strong>Batti</strong>.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/products" className={styles.shopBtn}>
              Shop Now
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Image
            src="/assets/batti-hero.png"
            alt="Batti Products"
            width={420}
            height={420}
            className={styles.heroImage}
            priority
          />
        </motion.div>
      </div>

      {/* Trust / Info Strip */}
      <motion.div
        className={styles.iconStrip}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div><Truck size={20}/> Fast Delivery</div>
        <div><Heart size={20}/> Loved by Customers</div>
        <div><Star size={20}/> Curated Quality</div>
      </motion.div>
    </section>
  );
}
