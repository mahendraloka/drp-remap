import React, { useState, useEffect } from 'react';
import { MessageSquare, Gauge, Cpu, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [waLink, setWaLink] = useState('');

  const waNumbers = [
    'https://wa.me/6281338245602?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.',
    'https://wa.me/6287743632413?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.'
  ];

  useEffect(() => {
    // 50:50 rotation
    const randomIndex = Math.random() < 0.5 ? 0 : 1;
    setWaLink(waNumbers[randomIndex]);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-stripes bg-noise"
    >
      {/* Background Decorative Neon Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-drp-red/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      
      {/* Subtle Racing Lines */}
      <div className="absolute right-0 bottom-0 w-full h-1/3 bg-gradient-to-t from-[#050811] to-transparent pointer-events-none z-0"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-drp-red/10 border border-drp-red/30 mb-8 animate-fade-in-down">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-drp-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-drp-red"></span>
          </span>
          <span className="font-racing text-xs tracking-widest text-drp-red uppercase font-bold">
            ECU REMAP PATI & BRT JUKEN TUNING
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black italic tracking-tight leading-none text-white mb-6 uppercase">
          Unlocking your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-drp-red to-drp-red-light drop-shadow-[0_2px_10px_rgba(220,38,38,0.2)]">
            engine’s true potential.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Optimalisasi performa mesin untuk <strong className="text-white">ECU Standar Honda</strong> dan <strong className="text-white">Juken 5 (BRT)</strong>. Proses aman, hasil instan, dan nafas mesin lebih panjang.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" id="whatsapp-cta">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-drp-red hover:bg-drp-red-dark text-white font-racing text-lg tracking-wider uppercase px-8 py-4 rounded-lg transition-all duration-300 red-glow-hover transform hover:-translate-y-1"
          >
            <MessageSquare className="w-5 h-5 fill-white/10" />
            Konsultasi Sekarang (Gratis)
          </a>
          
          <a
            href="#harga"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-drp-red hover:text-white text-slate-300 font-racing text-lg tracking-wider uppercase px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Lihat Price List
          </a>
        </div>

        {/* Mini stats or highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-slate-900 text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-drp-red mt-0.5">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Unlock Limiter</h3>
              <p className="text-xs text-slate-500">Nafas motor lebih panjang</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-drp-red mt-0.5">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Tuning Presisi</h3>
              <p className="text-xs text-slate-500">BBM & Pengapian Optimal</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-start gap-3 justify-center md:justify-start">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-drp-red mt-0.5">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Garansi Puas</h3>
              <p className="text-xs text-slate-500">Pengerjaan Aman & Bergaransi</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
