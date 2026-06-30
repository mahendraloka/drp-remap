import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Keunggulan from './components/Keunggulan';
import PriceList from './components/PriceList';
import FAQ from './components/FAQ';
import Lokasi from './components/Lokasi';
import InstagramCTA from './components/InstagramCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#050811] text-slate-300 min-h-screen flex flex-col font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Keunggulan Section */}
        <Keunggulan />

        {/* Price List Section */}
        <PriceList />

        {/* FAQ Section */}
        <FAQ />

        {/* Lokasi & Map Section */}
        <Lokasi />

        {/* Instagram CTA Section */}
        <InstagramCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
