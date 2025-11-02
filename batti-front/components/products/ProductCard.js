import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Products.module.css';

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.name} width={200} height={200} />
      <h3>{product.name}</h3>
      <p className={styles.price}>{`₮${product.price.toLocaleString()}`}</p>
      <Link href={`/products/${product.id}`} className={styles.viewBtn}>
        View Details
      </Link>
    </div>
  );
}
