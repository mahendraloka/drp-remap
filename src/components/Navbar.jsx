import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoDrp from '../assets/logodrp.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [waLink, setWaLink] = useState('');

  const waNumbers = [
    'https://wa.me/6281338245602?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.',
    'https://wa.me/6287743632413?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.'
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // Choose WA number
    const randomIndex = Math.random() < 0.5 ? 0 : 1;
    setWaLink(waNumbers[randomIndex]);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-drp-dark/80 backdrop-blur-md border-b border-drp-dark-border py-3 shadow-lg shadow-black/20' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <img src={logoDrp} alt="DRP Remap" className="h-10 sm:h-28 w-auto object-contain" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium tracking-wide uppercase hover:text-drp-red transition-colors duration-200">Home</a>
            <a href="#keunggulan" className="text-sm font-medium tracking-wide uppercase hover:text-drp-red transition-colors duration-200">Keunggulan</a>
            <a href="#harga" className="text-sm font-medium tracking-wide uppercase hover:text-drp-red transition-colors duration-200">Price List</a>
            <a href="#lokasi" className="text-sm font-medium tracking-wide uppercase hover:text-drp-red transition-colors duration-200">Lokasi</a>
            
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-drp-red text-white font-racing text-sm tracking-wider uppercase px-4 py-2 rounded-md hover:bg-drp-red-dark transition-all duration-300 shadow-md shadow-drp-red/10 hover:shadow-drp-red/30 transform hover:-translate-y-0.5"
            >
              Konsultasi
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-drp-dark-card focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-drp-dark/95 backdrop-blur-lg border-b border-drp-dark-border transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold tracking-wider uppercase hover:bg-drp-red/10 hover:text-white transition-all duration-200"
          >
            Home
          </a>
          <a
            href="#keunggulan"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold tracking-wider uppercase hover:bg-drp-red/10 hover:text-white transition-all duration-200"
          >
            Keunggulan
          </a>
          <a
            href="#harga"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold tracking-wider uppercase hover:bg-drp-red/10 hover:text-white transition-all duration-200"
          >
            Price List
          </a>
          <a
            href="#lokasi"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2.5 rounded-md text-base font-semibold tracking-wider uppercase hover:bg-drp-red/10 hover:text-white transition-all duration-200"
          >
            Lokasi
          </a>
          <div className="pt-2 px-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-drp-red text-white text-center font-racing tracking-wider uppercase py-3 rounded-md hover:bg-drp-red-dark transition-all duration-300"
            >
              Konsultasi Sekarang
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
