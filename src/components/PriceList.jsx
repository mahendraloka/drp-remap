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
      sub: "Under 150cc (Scoopy, Beat, Vario 125/150, Genio, dll)",
      price: "Rp 200.000",
      popular: false,
      features: [
        "Khusus ECU Standar Honda",
        "Unlock RPM Limiter Maksimal",
        "Peningkatan Torsi & Tenaga Harian",
        "Tarikan Mesin Lebih Enteng & Padat",
        "Konsumsi BBM Tetap Efisien"
      ]
    },
    {
      title: "Motor Standar & Tune Up",
      sub: "160cc Series (Vario 160, PCX 160, ADV 160, Stylo 160)",
      price: "Rp 270.000",
      popular: false,
      features: [
        "Khusus ECU Standar Honda 160cc (eSP+)",
        "Unlock RPM Limiter Sesuai Karakter",
        "Optimasi Air Fuel Ratio (AFR) & Pengapian",
        "Akselerasi Padat & Hilangkan Ngempos",
        "Sangat Cocok untuk Kirian / CVT Custom"
      ]
    },
    {
      title: "Up Spek Harian",
      sub: "Non-Kompetisi / Under 165cc (Exhaust, CVT, Air Filter)",
      price: "Rp 250.000",
      popular: true,
      features: [
        "Penyesuaian Knalpot Racing & Filter",
        "Kalibrasi Fuel Map (BBM) & Ignition",
        "Penyesuaian dengan Ubahan Kirian / CVT",
        "Akselerasi Padat & Responsif di Semua RPM",
        "Menghilangkan Deselerasi Nembak-Nembak"
      ]
    },
    {
      title: "Spek Bore Up / FFA",
      sub: "165cc++ (Kompetisi / Spek Tinggi / Klep Lebar)",
      price: "Rp 300.000",
      pricePrefix: "Start From",
      popular: false,
      features: [
        "Custom Map Sesuai Spek Bore Up / FFA",
        "Fine Tuning Maksimal & Limit RPM Custom",
        "Kalibrasi Noken As & Klep Lebar / TB Gede",
        "Penyesuaian Ignition Timing Ekstrem",
        "Analisis Pembakaran Mesin Detail"
      ]
    },
    {
      title: "Juken 5 Tuning",
      sub: "Semua Tipe Motor dengan ECU Juken 5 BRT",
      price: "Rp 100.000",
      priceSuffix: " / per 1 core",
      popular: false,
      nonGaransi: true,
      features: [
        "Setting Ulang Parameter Juken 5",
        "Kalibrasi Throttle Position Sensor (TPS)",
        "Tuning Fuel & Ignition Curve per Core",
        "Penyesuaian Debit Injector & Limit RPM",
        "Khusus Knalpot Racing / Filter Udara Baru",
        "Non Garansi (Tuning Sesuai Spek Mesin)"
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

        {/* Packages Flex Container for Balancing 5 Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col rounded-xl overflow-hidden transition-all duration-300 w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-sm ${
                pkg.popular 
                  ? 'bg-drp-dark border-2 border-drp-red shadow-xl shadow-drp-red/10 scale-105 z-10 lg:translate-y-[-8px]' 
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
                <div className="mt-4 min-h-[56px] flex flex-col justify-end">
                  {pkg.pricePrefix && (
                    <span className="text-xs font-bold text-drp-red uppercase tracking-wider mb-0.5 block font-sans">
                      {pkg.pricePrefix}
                    </span>
                  )}
                  <div className="flex items-baseline">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-racing">
                      {pkg.price}
                    </span>
                    {pkg.priceSuffix && (
                      <span className="text-xs text-slate-500 ml-1">
                        {pkg.priceSuffix}
                      </span>
                    )}
                  </div>
                </div>
                {pkg.nonGaransi && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-amber-500/90 bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10">
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
