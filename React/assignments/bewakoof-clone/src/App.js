import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
