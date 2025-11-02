import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function CategoriesSection() {
    return (
        <section className={styles.categories}>
        <h2>Our Categories</h2>
        <div className={styles.categoryGrid}>
          <Link href="/products#haircare" className={styles.categoryCard}>Hair Care</Link>
          <Link href="/products#bodygel" className={styles.categoryCard}>Body Gel</Link>
          <Link href="/products#plushies" className={styles.categoryCard}>Plushies</Link>
          <Link href="/products#stationery" className={styles.categoryCard}>Stationery</Link>
        </div>
      </section>
    )
}