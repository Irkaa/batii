"use client";

import styles from "@/styles/contact/Contact.module.css";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram } from "lucide-react";

export default function ContactPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.overlay}>
          <h1>Contact Us</h1>
          <p>We’d love to hear from you!</p>
        </div>
      </motion.section>

      {/* Contact Info Section */}
      <motion.section
        className={styles.info}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Get In Touch</h2>
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <MapPin size={32} color="var(--color-light-blue)" />
            <h3>Visit Us</h3>
            <p>Ulaanbaatar, Mongolia<br />Batti Convenience Store</p>
          </div>

          <div className={styles.infoCard}>
            <Mail size={32} color="var(--color-yellow)" />
            <h3>Email</h3>
            <p><a href="mailto:info@batti.mn">info@batti.mn</a></p>
          </div>

          <div className={styles.infoCard}>
            <Phone size={32} color="var(--color-pink)" />
            <h3>Phone</h3>
            <p>+976 9999 9999</p>
          </div>

          <div className={styles.infoCard}>
            <Instagram size={32} color="var(--color-light-yellow)" />
            <h3>Social</h3>
            <p><a href="https://instagram.com/batti.store">@batti.store</a></p>
          </div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className={styles.formSection}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Send Us a Message</h2>
        <form className={styles.form}>
          <div className={styles.fieldGroup}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className={styles.button}
          >
            Send Message
          </motion.button>
        </form>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className={styles.mapSection}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
      >
        <h2>Find Us Here</h2>
        <div className={styles.mapPlaceholder}>
          <MapPin size={40} color="var(--color-light-yellow)" />
          <span>Map coming soon...</span>
        </div>
      </motion.section>
    </main>
  );
}
