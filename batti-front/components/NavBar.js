import Link from "next/link";
import Image from "next/image";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      {/* Left side: Logo + Menu */}
      <div className={styles.navLeft}>
        <Link href="/">
          <Image 
            src="/batti_logo.png" 
            alt="BATTI Logo" 
            width={120} 
            height={40} 
            priority
          />
        </Link>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/brands">Brands</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Right side: Search bar */}
      <div className={styles.navRight}>
        <input
          type="text"
          placeholder="Search products..."
          className={styles.searchInput}
        />
        <button className={styles.searchBtn}>Search</button>
      </div>
    </nav>
  );
}
