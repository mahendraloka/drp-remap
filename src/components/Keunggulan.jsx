import React from 'react';
import { Activity, Zap, Flame, Settings } from 'lucide-react';

export default function Keunggulan() {
  const points = [
    {
      icon: <Activity className="w-8 h-8 text-drp-red" />,
      title: "Buka Batasan (Unlock Limiter)",
      description: "Membuka batasan RPM bawaan pabrik agar nafas motor Anda jadi jauh lebih panjang di putaran atas."
    },
    {
      icon: <Zap className="w-8 h-8 text-drp-red" />,
      title: "Performa Responsif",
      description: "Menghilangkan gejala motor ngempos/lemot. Tarikan gas terasa lebih padat, instan, dan bertenaga di putaran bawah."
    },
    {
      icon: <Flame className="w-8 h-8 text-drp-red" />,
      title: "BBM & Pengapian Optimal",
      description: "Kalibrasi ulang air-fuel ratio (AFR) dan timing pengapian agar pembakaran efisien dan pas dengan knalpot atau modifikasi Anda."
    },
    {
      icon: <Settings className="w-8 h-8 text-drp-red" />,
      title: "Khusus Juken 5 (BRT)",
      description: "Melayani fine-tuning settingan ECU Juken 5 untuk kebutuhan knalpot racing, bore up ringan, maupun pemakaian harian."
    }
  ];

  return (
    <section id="keunggulan" className="py-24 bg-noise border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-wide text-white uppercase mb-4">
            Mengapa Harus Remap <br className="sm:hidden" />
            <span className="text-drp-red">di DRP?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Kami menghadirkan solusi tuning performa motor harian dengan kualitas presisi, aman untuk mesin, dan langsung terasa hasilnya.
          </p>
          <div className="w-16 h-1 bg-drp-red mx-auto mt-6"></div>
        </div>

        {/* Keunggulan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="glow-border bg-[#0b0f19] border border-slate-800 rounded-xl p-8 hover:translate-y-[-4px] transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Decorator */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-drp-red/5 rounded-full blur-xl pointer-events-none group-hover:bg-drp-red/10 transition-all duration-300"></div>

              {/* Icon Wrapper */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl inline-block mb-6 group-hover:border-drp-red/30 transition-colors duration-300">
                {point.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3 font-racing">
                {point.title}
              </h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
