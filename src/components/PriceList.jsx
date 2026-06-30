import React, { useState, useEffect } from 'react';
import { Check, Info, MessageSquare } from 'lucide-react';

export default function PriceList() {
  const [waLink, setWaLink] = useState('');

  const waNumbers = [
    'https://wa.me/6281338245602?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.',
    'https://wa.me/6287743632413?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.'
  ];

  useEffect(() => {
    const randomIndex = Math.random() < 0.5 ? 0 : 1;
    setWaLink(waNumbers[randomIndex]);
  }, []);

  const packages = [
    {
      title: "Motor Standar",
      sub: "Under 150cc",
      price: "Rp 200.000",
      popular: false,
      features: [
        "Khusus ECU Standar Honda",
        "Unlock RPM Limiter",
        "Peningkatan Torsi Harian",
        "Nafas Motor Lebih Panjang",
      ]
    },
    {
      title: "Up Spek Harian",
      sub: "Non-Kompetisi (Under 165cc)",
      price: "Rp 250.000",
      popular: true,
      features: [
        "Knalpot Racing / Bore Up Ringan",
        "Kalibrasi Fuel Map (BBM)",
        "Tuning Ignition Timing",
        "Akselerasi Padat & Responsif",
      ]
    },
    {
      title: "Spek Bore Up / FFA",
      sub: "165cc++ (Kompetisi / Spek Tinggi)",
      price: "Rp 350.000++",
      popular: false,
      features: [
        "Custom Map Sesuai Spek Mesin",
        "Fine Tuning Maksimal",
        "Cocok untuk Porting & Bore Up",
        "Analisis Pembakaran Mesin",
      ]
    },
    {
      title: "Juken 5 Tuning",
      sub: "Semua Tipe Motor dengan Juken 5",
      price: "Rp 100.000",
      priceSuffix: " / per 1 core",
      popular: false,
      nonGaransi: true,
      features: [
        "Setting Ulang Map Juken 5",
        "Kalibrasi Throttle Position",
        "Tuning Fuel & Ignition Curve",
        "Khusus Knalpot / Filter Udara Baru",
        "Non Garansi (Sesuai Karakter Mesin)"
      ]
    }
  ];

  return (
    <section id="harga" className="py-24 bg-[#070b14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-wide text-white uppercase mb-4">
            Daftar <span className="text-drp-red">Price List</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Tarif transparan dengan pengerjaan profesional. Pilih paket remap yang sesuai dengan kondisi mesin motor Anda.
          </p>
          <div className="w-16 h-1 bg-drp-red mx-auto mt-6"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-xl overflow-hidden transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-drp-dark border-2 border-drp-red shadow-xl shadow-drp-red/10 scale-105 z-10 md:translate-y-[-8px]' 
                  : 'bg-[#0b0f19]/60 border border-slate-800 hover:border-slate-700 hover:translate-y-[-4px]'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-drp-red text-white text-xs font-bold font-racing uppercase tracking-wider px-4 py-1.5 rounded-bl-lg">
                  Paling Diminati
                </div>
              )}

              {/* Card Top / Header */}
              <div className="p-6 pb-0">
                <h3 className="text-xl font-bold text-white font-racing uppercase tracking-wider">
                  {pkg.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
                  {pkg.sub}
                </p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-racing">
                    {pkg.price}
                  </span>
                  {pkg.priceSuffix && (
                    <span className="text-xs text-slate-500 ml-1">
                      {pkg.priceSuffix}
                    </span>
                  )}
                </div>
                {pkg.nonGaransi && (
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-amber-500/90 bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10">
                    <Info className="w-3.5 h-3.5 shrink-0" />
                    <span>Non Garansi (Tuning Juken)</span>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-slate-800/80 mx-6 my-6"></div>

              {/* Features List */}
              <div className="px-6 flex-grow">
                <ul className="space-y-3.5">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-slate-300">
                      <Check className="w-4 h-4 text-drp-red shrink-0 mt-0.5 mr-2.5" />
                      <span className="font-light">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-6 mt-8">
                <a
                  href={`${waLink}&text=Halo%20DRP%20Remap,%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.title)}%20${encodeURIComponent(pkg.sub)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 font-racing tracking-wider uppercase text-sm py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-drp-red text-white hover:bg-drp-red-dark shadow-md shadow-drp-red/10' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Booking Jadwal
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
