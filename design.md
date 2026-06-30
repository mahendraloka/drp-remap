# Project Design Specifications: DRP Remap Website

Project ini adalah landing page satu halaman (Single-Page Website) untuk bisnis remap ECU motor bernama "DRP" yang berlokasi di Pati. Aplikasi dibangun menggunakan React dan Tailwind CSS, ditargetkan untuk dideploy di Vercel.

## 1. Konsep Visual & Branding
- **Tema:** Racing, High-Tech, JDM (Japanese Domestic Market), Modern Clean.
- **Warna:** Latar belakang gelap (Dark Mode secara default, e.g., `bg-slate-900` atau `bg-neutral-950`), aksen utama menggunakan warna Merah Terang (e.g., `text-red-600`, `bg-red-600`) disesuaikan dengan identitas logo DRP (tulisan DRP merah & ornamen bendera Jepang).
- **Typography:** Gunakan font sans-serif yang tegas, tebal, dan modern untuk nuansa racing/otomotif.

## 2. Struktur Komponen & Konten (Single Page Layout)

### A. Navbar
- **Kiri:** Logo DRP (Gunakan placeholder teks tebal berwarna merah/putih dengan ikon lingkaran merah bendera Jepang jika gambar belum ada).
- **Kanan:** Link navigasi cepat yang smooth scroll ke section internal: Home, Keunggulan, Price List, Lokasi.

### B. Hero Section (Kesan Pertama dari Instagram)
Optimalkan bagian ini karena sebagian besar traffic berasal dari link bio Instagram `@remapecu_pati`.
- **Headline Utama:** "Unlocking your engine’s true potential."
- **Sub-headline:** "Optimalisasi performa mesin untuk ECU Standar Honda dan Juken 5 (BRT). Proses aman, hasil instan."
- **Tombol Aksi (CTA Utama):** Tombol merah mencolok dengan efek hover yang responsif. Teks: "Hubungi Admin via WA" atau "Konsultasi Sekarang (Gratis)".
Untuk tombol CTA WhatsApp, buatkan fungsi rotasi otomatis 50:50 antara dua nomor WhatsApp admin ya.
  - *Catatan:* Link WA harus menggunakan format teks otomatis, contoh: `https://wa.me/6281338245602?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.`
  dan `https://wa.me/6287743632413?text=Halo%20DRP%20Remap,%20saya%20lihat%20dari%20website.%20Mau%20tanya-tanya/booking%20jadwal%20remap%20untuk%20motor%20saya%20dong.`

### C. Keunggulan Section ("Kenapa Harus Remap di DRP?")
Tampilkan dalam bentuk grid 3 atau 4 card dengan icon minimalis modern:
1. **Buka Batasan (Unlock Limiter):** Nafas motor jadi lebih panjang di putaran atas.
2. **Performa Responsif:** Tarikan gas lebih padat di putaran bawah, dan menghilangkan gejala mesin ngempos.
3. **Konsumsi BBM Optimal:** Pengaturan suplai bahan bakar (fuel card) dan pengapian disesuaikan dengan karakter berkendara atau knalpot yang dipakai.
4. **Khusus Juken 5:** Melayani fine-tuning (setting ulang) bagi yang sudah ganti knalpot racing, bore up ringan, atau kebutuhan harian.

### D. Price List Section (Daftar Harga Jelas)
Tampilkan daftar harga dengan layout card/tabel yang rapi dan tegas. Gunakan placeholder `Rp XXX.XXX` agar mudah diedit nantinya:
- **Kategori Motor Standar Under 150cc** -> *Rp 200.000*
- **Kategori Up Spek Harian Non-Kompetisi (Under 165cc)** -> *Rp 250.000*
- **Kategori Spek 165cc++ (Tergantung Spek)** -> *Rp 350.000++*
- **Kategori Juken 5 Tuning / Remap** (Semua tipe motor yang sudah terpasang ECU Juken 5) -> Per 1 core *Rp 100.000* (non garansi)

### E. Jam Operasional & Lokasi Bengkel (Pati Area)
Menampilkan informasi kejelasan operasional bengkel:
- **Jam Buka:** Selasa – Minggu (19.00 - 23.00 WIB). Hari Senin 24 Jam
- **Alamat Jelas:** Berikan satu blok elemen teks alamat lengkap bengkel di Pati yang mudah di-blok dan di-copy oleh user.
- **Peta Interaktif:** Pasang komponen embed Google Maps iframe yang responsif (`w-full`). Pastikan jika di-klik di HP, otomatis mengarahkan/membuka aplikasi Google Maps ke rute bengkel DRP.

### F. Call to Action Media Sosial & Footer
- **Instagram Banner:** Sebelum footer, berikan ajakan visual: *"Lihat video dokumentasi, testimoni pelanggan, dan proses remap harian kami di Instagram"* disertai tombol/ikon yang mengarah langsung ke `@remapecu_pati`.
- **Footer:** Hak cipta sederhana (e.g., © 2026 DRP. All rights reserved).

## 3. Constraints & Technical Rules
- **Responsive Layout:** Wajib menerapkan pendekatan Mobile-First Design menggunakan utilitas Tailwind CSS (`sm:`, `md:`, `lg:`). Tampilan di layar HP harus sangat rapi karena mayoritas diakses lewat perangkat mobile.
- **External Links:** Semua tautan ke WhatsApp dan Instagram wajib menggunakan atribut `target="_blank" rel="noopener noreferrer"` untuk keamanan dan kenyamanan user.
- **Code Cleanliness:** Semua file komponen harus dipisah secara teratur di dalam direktori `src/components/` (e.g., `Navbar.jsx`, `Hero.jsx`, `PriceList.jsx`, `Footer.jsx`).
