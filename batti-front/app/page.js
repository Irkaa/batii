import styles from '@/styles/Home.module.css';

import HeroSection from '@/components/home/HeroSection';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedSection from '@/components/home/FeaturedSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection/>
    
      <CategoriesSection/>

      <FeaturedSection/>
      
    </main>
  );
}
