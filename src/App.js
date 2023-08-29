import React from 'react';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import ProductFeed from './component/ProductFeed';

export default function App({products}) {
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



