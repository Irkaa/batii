import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export default function FeaturedSection() {
    const featuredProducts = [
    { id: 1, name: 'Shampoo', image: '/products/shampoo.jpg' },
    { id: 2, name: 'Conditioner', image: '/products/conditioner.jpg' },
    { id: 3, name: 'Body Gel', image: '/products/bodygel.jpg' },
    { id: 4, name: 'Plushie', image: '/products/plushie.jpg' },
    { id: 5, name: 'Chihmel Togloom', image: '/products/chihmel.jpg' },
  ];

    <section className={styles.featured}>
        <h2>Featured Products</h2>
        <div className={styles.carousel}>
          {featuredProducts.map(product => (
            <div key={product.id} className={styles.card}>
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
              />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      </section>
}