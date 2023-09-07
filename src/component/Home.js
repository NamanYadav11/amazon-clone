import React from 'react';
import '../App.css';
import Header from './Header';
import Banner from './Banner';
import ProductFeed from './ProductFeed'

export default function Home({products}) {
  return (
    <div className="App">
      <Header/>
      <main className='max-w-screen-xl mx-auto'>
        {/* Banner */}
        <Banner/>

        {/* ProductFeed */}
        <ProductFeed/>
      </main>
    </div>
  );
}