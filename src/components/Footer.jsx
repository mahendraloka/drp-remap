import React from 'react';
import logoDrp from '../assets/logodrp.png';

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-slate-900/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo Brand */}
          <div className="flex items-center">
            <img src={logoDrp} alt="DRP Remap" className="h-8 sm:h-[72px] w-auto object-contain opacity-90" />
          </div>

          {/* Copyright text */}
          <p className="text-xs text-slate-500 font-light">
            &copy; {new Date().getFullYear()} DRP. All rights reserved.
          </p>

          {/* Small credits/location */}
          <p className="text-[10px] text-slate-600 font-light tracking-wide uppercase">
            Pati, Jawa Tengah, Indonesia
          </p>

        </div>
      </div>
    </footer>
  );
}
