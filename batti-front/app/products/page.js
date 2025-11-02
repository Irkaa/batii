"use client";

import { useState } from 'react';
import styles from '@/styles/Products.module.css';
import ProductSidebar from '@/components/products/ProductSideBar';
import ProductCard from '@/components/products/ProductCard';

// Sample products
const products = [
  { id: 1, name: 'Shampoo', price: 15000, category: 'Hair Care', image: '/products/shampoo.jpg' },
  { id: 2, name: 'Conditioner', price: 18000, category: 'Hair Care', image: '/products/conditioner.jpg' },
  { id: 3, name: 'Body Gel', price: 12000, category: 'Body Gel', image: '/products/bodygel.jpg' },
  { id: 4, name: 'Plushie', price: 25000, category: 'Plushies', image: '/products/plushie.jpg' },
  { id: 5, name: 'Chihmel Togloom', price: 20000, category: 'Toys', image: '/products/chihmel.jpg' },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // Filter and sort products
  let displayedProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesPrice =
      (!priceRange.min || product.price >= Number(priceRange.min)) &&
      (!priceRange.max || product.price <= Number(priceRange.max));

    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (sortOrder === 'price-low') displayedProducts.sort((a, b) => a.price - b.price);
  if (sortOrder === 'price-high') displayedProducts.sort((a, b) => b.price - a.price);

  return (
    <main className={styles.main}>
      <h1>Our Products</h1>
      <div className={styles.container}>
        <ProductSidebar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <section className={styles.productsGrid}>
          {displayedProducts.length > 0 ? (
            displayedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products match your filters.</p>
          )}
        </section>
      </div>
    </main>
  );
}
