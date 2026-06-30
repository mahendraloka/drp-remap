import React from 'react';
import { MapPin, Clock, Copy, Check, Navigation } from 'lucide-react';

export default function Lokasi() {
  const [copied, setCopied] = React.useState(false);
  const alamatLengkap = "DRP Remap ECU Pati, Kaborongan, Pati Lor, Kec. Pati, Kabupaten Pati, Jawa Tengah 59111";

  const handleCopy = () => {
    navigator.clipboard.writeText(alamatLengkap);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lokasi" className="py-24 bg-[#070b14] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-black italic tracking-wide text-white uppercase mb-4">
            Lokasi & <span className="text-drp-red">Jam Operasional</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-light">
            Kunjungi bengkel kami di wilayah Pati untuk pengerjaan langsung di tempat.
          </p>
          <div className="w-16 h-1 bg-drp-red mx-auto mt-6"></div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Alamat & Jam Buka */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Jam Buka Card */}
            <div className="bg-[#0b0f19] border border-slate-800 rounded-xl p-6 flex items-start gap-4">
              <div className="p-3 bg-drp-red/10 border border-drp-red/20 rounded-lg text-drp-red shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider font-racing mb-2">
                  Jam Operasional
                </h3>
                <div className="space-y-1.5 text-sm text-slate-400 font-light">
                  <div className="flex justify-between gap-4">
                    <span>Selasa – Minggu:</span>
                    <span className="font-semibold text-white">19.00 - 23.00 WIB</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Senin:</span>
                    <span className="font-semibold text-white">Buka 24 Jam</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alamat Card */}
            <div className="bg-[#0b0f19] border border-slate-800 rounded-xl p-6 flex flex-col justify-between flex-grow">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-drp-red/10 border border-drp-red/20 rounded-lg text-drp-red shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider font-racing mb-2">
                    Alamat Bengkel
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {alamatLengkap}
                  </p>
                </div>
              </div>

              {/* Copy and Open Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleCopy}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Alamat Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Alamat</span>
                    </>
                  )}
                </button>
                
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Kecamatan+Margoyoso+Pati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-drp-red hover:bg-drp-red-dark text-white py-3 px-4 rounded-lg text-sm font-racing uppercase tracking-wider transition-colors duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Petunjuk Rute
                </a>
              </div>
            </div>

          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-800 rounded-xl overflow-hidden min-h-[300px] h-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1940183813117!2d111.0407164!3d-6.7461753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70d3003e53a5e1%3A0x128593e8ceda19ea!2sDRP%20Remap%20Ecu%20Pati!5e0!3m2!1sid!2sid!4v1782847505471!5m2!1sid!2sid"
              className="w-full h-full min-h-[350px] border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Bengkel DRP Remap"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
