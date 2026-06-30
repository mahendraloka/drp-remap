import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apakah remap ECU aman untuk mesin motor harian?",
      answer: "Sangat aman. Proses remap yang kami lakukan hanya mengoptimalkan parameter pembakaran dan pengapian dalam batas toleransi pabrikan yang aman, bukan memaksa mesin bekerja melebihi kapasitasnya."
    },
    {
      question: "Apa saja perubahan yang langsung terasa setelah remap?",
      answer: "Nafas motor di putaran atas terasa lebih panjang (limiter RPM terbuka), akselerasi putaran bawah jauh lebih responsif, serta menghilangkan masalah mesin ngempos atau tertahan di RPM tengah."
    },
    {
      question: "Berapa lama proses pengerjaan remap ECU?",
      answer: "Proses pengerjaan berkisar antara 30 hingga 60 menit. Pengerjaan dilakukan secara instan langsung pada soket diagnostic motor Anda dan bisa ditunggu."
    },
    {
      question: "Apakah motor standar pabrik (belum modif) bisa di-remap?",
      answer: "Bisa sekali. Motor standar pabrikan biasanya memiliki setelan AFR yang terlalu irit dari pabrik untuk lolos uji emisi. Remap akan membuat penyaluran bahan bakar lebih optimal dan performa lebih responsif."
    },
    {
      question: "Apakah pengerjaan remap ini bergaransi?",
      answer: "Ya, kami memberikan garansi setting ulang 1x selama tidak ganti spesifikasi motor apabila dirasa kurang pas atau ingin disesuaikan kembali (berlaku untuk semua kategori remap ECU standar)."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-noise border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-wide text-white uppercase mb-4">
            Frequently Asked <span className="text-drp-red">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Pertanyaan yang sering diajukan seputar jasa remap ECU di bengkel kami.
          </p>
          <div className="w-16 h-1 bg-drp-red mx-auto mt-6"></div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="bg-[#0b0f19] border border-slate-800 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-900/50 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-drp-red shrink-0" />
                    <span className="font-bold text-white text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-drp-red' : ''
                  }`} />
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 border-t border-slate-900' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-slate-400 text-sm leading-relaxed font-light bg-slate-950/20">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
