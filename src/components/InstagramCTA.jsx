import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

export default function InstagramCTA() {
  return (
    <section className="relative py-20 bg-noise overflow-hidden border-t border-slate-900">
      {/* Background Decorator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-drp-red/5 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle Stripes */}
          <div className="absolute inset-0 bg-stripes opacity-40 pointer-events-none"></div>

          {/* Icon Header */}
          <div className="p-4 bg-gradient-to-tr from-pink-600 to-purple-600 rounded-2xl inline-block mb-6 shadow-lg shadow-purple-900/30">
            <Instagram className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl font-black italic tracking-wide text-white uppercase mb-4 font-racing">
            Follow Instagram Kami
          </h2>

          {/* Paragraph */}
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed mb-8">
            Lihat langsung dokumentasi pengerjaan harian kami, testimoni video dari pelanggan, serta dyno test dan tips motor menarik di <strong className="text-white">@remapecu_pati</strong>.
          </p>

          {/* Link Button */}
          <a
            href="https://instagram.com/remapecu_pati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-red-600 to-drp-red text-white font-racing text-base tracking-wider uppercase px-8 py-3.5 rounded-lg hover:shadow-lg hover:shadow-red-600/20 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Buka Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

        </div>
      </div>
    </section>
  );
}
