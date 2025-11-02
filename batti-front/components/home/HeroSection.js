import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Welcome to BATTI Convenience Store</h1>
          <p>Shop the best hair care, body gel, plushies, stationery, and more!</p>
          <Link href="/products" className={styles.shopBtn}>Shop Now</Link>
        </div>
        <div className={styles.heroImage}>
          <Image
            src="/cover_photo.png"
            alt="BATTI Hero"
            width={500}
            height={300}
            priority
          />
        </div>
      </section>
    )
}