import styles from '@/styles/Products.module.css';

export default function ProductSidebar({
  searchTerm,
  setSearchTerm,
  sortOrder,
  setSortOrder,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange
}) {
  const categories = ['All', 'Hair Care', 'Body Gel', 'Plushies', 'Toys'];

  return (
    <aside className={styles.sidebar}>
      {/* Search */}
      <h3>Search</h3>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      {/* Category Filter */}
      <h3>Category</h3>
      <select
        value={selectedCategory}
        onChange={e => setSelectedCategory(e.target.value)}
        className={styles.sortSelect}
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      
      {/* Sort */}
      <h3>Sort By</h3>
      <select
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
        className={styles.sortSelect}
      >
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>

      {/* Price Range */}
      <h3>Price Range (₮)</h3>
      <input
        type="number"
        placeholder="Min"
        value={priceRange.min}
        onChange={e => setPriceRange({ ...priceRange, min: e.target.value })}
        className={styles.priceInput}
      />
      <input
        type="number"
        placeholder="Max"
        value={priceRange.max}
        onChange={e => setPriceRange({ ...priceRange, max: e.target.value })}
        className={styles.priceInput}
      />
    </aside>
  );
}
