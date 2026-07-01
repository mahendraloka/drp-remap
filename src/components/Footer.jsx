import React from 'react';
import logoDrp from '../assets/logodrp.png';

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-slate-900/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 text-center">
          
          {/* Logo Brand */}
          <div className="flex items-center justify-center sm:justify-start">
            <img src={logoDrp} alt="DRP Remap" className="h-8 sm:h-[72px] w-auto object-contain opacity-90" />
          </div>

          {/* Copyright text */}
          <div className="text-center">
            <p className="text-xs text-slate-500 font-light">
              &copy; {new Date().getFullYear()} DRP. All rights reserved.
            </p>
          </div>

          {/* Small credits/location */}
          <div className="text-center sm:text-right">
            <p className="text-[10px] text-slate-600 font-light tracking-wide uppercase">
              Pati, Jawa Tengah, Indonesia
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
