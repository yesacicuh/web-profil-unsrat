import { useState, useEffect } from 'react'
import ScrollAnimate from '../components/ScrollAnimate'

// Impor komponen terpisah untuk lightbox gambar agar bebas bug
import LightboxImage from '../components/LightboxImage'

// Import gambar dari folder assets
import mapImage from '../assets/map.png'
import labImage from '../assets/laboratorium.jpg'
import kelasImage from '../assets/kelas.jpg' 
import seminarImage from '../assets/seminar.png' 
import inspireImage from '../assets/inspire.png'
import ruangDosenImage from '../assets/ruangdosen.jpg' 
import disabilitasImage from '../assets/disabilitas.jpeg' 
import elibImage from '../assets/elib.jpg' // 🌟 Impor gambar elib.jpg

export default function Fasilitas() {
  // State untuk menyimpan data fasilitas dari JSON
  const [daftarFasilitas, setDaftarFasilitas] = useState([])
  // State untuk menyimpan fasilitas mana yang sedang diklik/dibuka
  const [fasilitasAktif, setFasilitasAktif] = useState(null)

  // Ambil data dari fasilitas.json
  useEffect(() => {
    fetch('/fasilitas.json')
      .then(res => res.json())
      .then(data => setDaftarFasilitas(data))
      .catch(err => console.error("Gagal memuat data fasilitas:", err))
  }, [])

  // Fungsi SVG Ikon disesuaikan dengan ID agar tetap dinamis
  const renderIkon = (id) => {
    switch(id) {
      case 1: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      case 2: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      case 3: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      case 4: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      case 5: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      case 6: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      case 7: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      default: return <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514" />
    }
  }

  // ================= TAMPILAN DETAIL FASILITAS =================
  if (fasilitasAktif) {
    return (
      <div className="w-full bg-[#fcfcfc] min-h-screen py-16 px-6 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <ScrollAnimate>
            
            <button 
              onClick={() => setFasilitasAktif(null)}
              className="mb-8 flex items-center gap-2 text-sm font-bold text-[#0A2458] hover:text-[#0A2458]/70 transition-colors bg-[#F0F4F8] px-5 py-2.5 rounded-full border border-[#0A2458]/10 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
              Kembali ke Daftar Fasilitas
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* KOLOM KIRI: Teks Deskripsi */}
              <div className="lg:col-span-6 flex flex-col items-start">
                <span className="bg-[#F0F4F8] text-[#0A2458] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-[#0A2458]/10 shadow-sm">
                  Fasilitas & Layanan
                </span>
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2458] mb-6 leading-tight">
                  {fasilitasAktif.nama}
                </h1>
                
                <div className="w-16 h-1.5 bg-[#0A2458] rounded-full mb-8"></div>
                
                <div className="space-y-6 text-brand-navy/80 text-base md:text-lg leading-relaxed font-medium">
                  {fasilitasAktif.nama === "Sistem Informasi Terpadu" ? (
                    <div>
                      <p className="mb-4 leading-relaxed">
                        SIT Universitas Sam Ratulangi memiliki beberapa modul yang mendukung proses pembelajaran. Modul-modul ini diintegrasikan oleh sebuah sistem yang disebut{' '}
                        <a 
                          href="https://inspire.unsrat.ac.id/login" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-[#0A2458] font-black underline hover:text-[#0A2458]/70 transition-colors"
                        >
                          Portal UNSRAT INSPIRE
                        </a>.
                      </p>
                    </div>
                  ) : (
                    fasilitasAktif.descLengkap?.split('\n').map((baris, idx) => (
                      <p 
                        key={idx} 
                        className={baris.includes('Kepala Laboratorium') || baris.includes('tersebar di') || baris.includes('•') ? "border-l-4 border-[#0A2458] pl-5 text-brand-navy" : ""}
                      >
                        {baris}
                      </p>
                    ))
                  )}
                </div>
              </div>

              {/* KOLOM KANAN: Visual Representasi (Gambar) */}
              <div className="lg:col-span-6 relative w-full h-[350px] md:h-[450px]">
                <div className="absolute inset-0 bg-[#F0F4F8] rounded-[3rem] transform rotate-3 border border-[#0A2458]/5"></div>
                
                <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                  {fasilitasAktif.nama === "Peta Kampus" ? (
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 relative flex items-center justify-center">
                      <LightboxImage 
                        src={mapImage} 
                        alt="Peta Kampus Teknik Informatika UNSRAT" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : fasilitasAktif.nama === "Laboratorium" ? (
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 overflow-hidden relative flex items-center justify-center">
                      <LightboxImage 
                        src={labImage} 
                        alt="Laboratorium Teknik Informatika UNSRAT" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : fasilitasAktif.nama === "Ruang Kuliah" ? (
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 overflow-hidden relative flex items-center justify-center">
                      <LightboxImage 
                        src={kelasImage} 
                        alt="Ruang Kuliah Teknik Informatika UNSRAT" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : fasilitasAktif.nama === "Ruang Seminar / Pertemuan" ? (
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 overflow-hidden relative flex items-center justify-center">
                      <LightboxImage 
                        src={seminarImage} 
                        alt="Ruang Seminar / Pertemuan Teknik Informatika UNSRAT" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : fasilitasAktif.nama === "Perpustakaan" ? ( // 🌟 Tambahkan logika untuk Perpustakaan
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 overflow-hidden relative flex items-center justify-center">
                      <LightboxImage 
                        src={elibImage} // 🌟 Gunakan gambar elibImage
                        alt="Perpustakaan Teknik Informatika UNSRAT" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : fasilitasAktif.nama === "Sistem Informasi Terpadu" ? (
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 overflow-hidden relative flex items-center justify-center">
                      <LightboxImage 
                        src={inspireImage} 
                        alt="Portal UNSRAT INSPIRE" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : fasilitasAktif.nama === "Ruang Dosen" ? (
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 overflow-hidden relative flex items-center justify-center">
                      <LightboxImage 
                        src={ruangDosenImage} 
                        alt="Ruang Dosen Teknik Informatika UNSRAT" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : fasilitasAktif.nama === "Layanan Khusus" ? (
                    <div className="w-[90%] h-[90%] bg-white rounded-[2.5rem] p-4 shadow-xl border border-[#0A2458]/10 overflow-hidden relative flex items-center justify-center">
                      <LightboxImage 
                        src={disabilitasImage} 
                        alt="Layanan Aksesibilitas Khusus / Disabilitas UNSRAT" 
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center gap-4 w-full px-6">
                      <div className="w-[80%] ml-auto bg-white rounded-3xl p-8 shadow-xl border border-[#0A2458]/10 flex items-center justify-center transform hover:-translate-y-2 transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-[#0A2458] opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          {renderIkon(fasilitasAktif.id)}
                        </svg>
                      </div>
                      <div className="w-[70%] mr-auto bg-[#0A2458] rounded-3xl p-6 sm:p-8 shadow-xl text-white transform hover:translate-x-2 transition-transform duration-500 relative z-10 -mt-10">
                        <h3 className="text-xl sm:text-2xl font-black mb-1 text-white">{fasilitasAktif.nama}</h3>
                        <p className="text-xs sm:text-sm font-bold opacity-80 uppercase tracking-wider text-white">Teknik Informatika UNSRAT</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </ScrollAnimate>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full bg-[#fcfcfc] min-h-screen flex flex-col pb-24 overflow-x-hidden animate-fade-in">
      <div className="pt-20 pb-16 bg-gradient-to-b from-[#F0F4F8] to-transparent text-center px-6">
        <ScrollAnimate>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2458] mb-4 tracking-tight">
            Layanan Fasilitas
          </h1>
          <div className="w-16 h-1.5 bg-[#0A2458] mx-auto rounded-full mb-6"></div>
          <p className="text-brand-navy/60 font-medium max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Berikut adalah beberapa layanan fasilitas fisik maupun digital yang tersedia di lingkungan Program Studi Teknik Informatika Universitas Sam Ratulangi.
          </p>
        </ScrollAnimate>
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {daftarFasilitas.map((item, index) => (
            <ScrollAnimate key={item.id} delay={index % 3 === 0 ? 'delay-0' : `md:delay-[${(index % 3) * 100}ms]`}>
              <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#0A2458]/10 hover:border-[#0A2458]/30 hover:shadow-[0_20px_40px_rgba(10,36,88,0.08)] transition-all duration-300 flex flex-col h-full group">
                <div className="w-14 h-14 rounded-2xl bg-[#F0F4F8] flex items-center justify-center text-[#0A2458] mb-6 group-hover:scale-110 group-hover:bg-[#0A2458] group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {renderIkon(item.id)}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A2458] mb-3 leading-snug">{item.nama}</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed mb-8 flex-grow font-medium">{item.descSingkat}</p>
                <button 
                  onClick={() => setFasilitasAktif(item)}
                  className="mt-auto text-white bg-[#0A2458] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0A2458]/90 transition-all px-4 py-3 rounded-xl w-full shadow-md hover:shadow-lg"
                >
                  Lihat Fasilitas ➔
                </button>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </div>
  )
}