import Link from "next/link";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        {/* Contact Info */}
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p><MapPin size={32}/> Баян-Монгол хорооллын зүүн талд-BATTI 2. 13-р хороолол, Бөхийн өргөөнөөс урагш-BATTI, <br/>Ulaanbaatar, Mongolia</p>
          <p><Phone size={16}/> +976 9595-2055</p>
          <p><Mail size={16}/> info@beautygarden.mn</p>
        </div>

        {/* Quick Links */}
        <div className={styles.links}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/brands">Brands</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className={styles.social}>
          <h3>Follow Us</h3>
          <div className={styles.icons}>
            <Link href=
            "https://www.instagram.com/batti.official/?fbclid=IwY2xjawM_NQJleHRuA2FlbQIxMABicmlkETFXeWt3clhuRDZlRWRibjFsAR55QqEIawNGnZNbkqRmTMksnEsSEPRLBFRmo-jBn0NijJcRYFcnvLAMx5mHCg_aem_ZW1HujHeRLxIfrMabqPi_w#" 
            target="_blank"><Instagram /></Link>
            <Link href=
            "https://www.facebook.com/profile.php?id=61555549902356" 
            target="_blank"><Facebook /></Link>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <p>© {new Date().getFullYear()} BATTI Convenience Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
