import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bgGedung from '../assets/gedung.jpeg'
import ScrollAnimate from '../components/ScrollAnimate' // 🌟 Panggil komponen dari file baru

// --- IMPORT FOTO DOKUMENTASI (Sudah Diperbaiki ke .png) ---
import imgPilmapres from '../assets/Prestasi di Pilmapres LLDIKTI XVI 2026.jpeg'
import imgPimnas from '../assets/Finalis PIMNAS 2024.jpeg'
import imgAunQa from '../assets/Sertifikasi Internasional AUN-QA.png'
import imgJurScop from '../assets/Publikasi Jurnal Scopus.jpg'

// --- KOMPONEN ANIMASI ANGKA ---
function AnimasiAngka({ target }) {
  const [angka, setAngka] = useState(0)

  useEffect(() => {
    let nilaiAwal = 0
    const durasiAnimasi = 2000 
    const waktuFrame = 16 
    const langkah = target / (durasiAnimasi / waktuFrame)

    const timer = setInterval(() => {
      nilaiAwal += langkah
      if (nilaiAwal >= target) {
        setAngka(target)
        clearInterval(timer)
      } else {
        setAngka(Math.ceil(nilaiAwal))
      }
    }, waktuFrame)

    return () => clearInterval(timer)
  }, [target])

  return <span>{angka}</span>
}

export default function Home() {
  
  // Data Prestasi disesuaikan dengan property 'foto' masing-masing
  const daftarPrestasi = [
    {
      judul: "Prestasi di Pilmapres LLDIKTI XVI 2026",
      foto: imgPilmapres,
      desc: (
        <>
          Mahasiswa Angkatan 2023, Clarissa Sheryl Natascha Maramis, meraih penghargaan <strong>Best Poster</strong> tingkat wilayah.
        </>
      )
    },
    {
      judul: "Finalis PIMNAS 2024",
      foto: imgPimnas,
      desc: (
        <>
          Tim mahasiswa Teknik Informatika berhasil menembus ajang Pekan Ilmiah Mahasiswa Nasional (PIMNAS) di Surabaya melalui inovasi <strong>Audio Therapy (PAX-MENTIS)</strong> untuk lansia.
        </>
      )
    },
    {
      judul: "Publikasi Jurnal Scopus (2024)",
      foto: imgJurScop,
      desc: (
        <>
          Mahasiswa berhasil mempublikasikan riset inovatif yang menggabungkan bidang <strong>Bioinformatika dan Machine Learning</strong> untuk analisis genotipe virus Hepatitis C.
        </>
      )
    },
    {
      judul: "Sertifikasi Internasional AUN-QA",
      foto: imgAunQa,
      desc: (
        <>
          Program Studi Teknik Informatika UNSRAT telah diakui kualitasnya secara internasional dengan mendapatkan <strong>sertifikasi ASEAN University Network-Quality Assurance (AUN-QA)</strong>.
        </>
      )
    }
  ];

  return (
    <div className="flex flex-col w-full bg-blue-50/50 overflow-x-hidden">
      
      {/* ================= HERO SECTION DENGAN GAMBAR GEDUNG ================= */}
      <div className="relative w-full flex items-center pt-20 pb-32 md:pb-40 lg:pb-48">
        
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgGedung})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40"></div>
        </div>

        {/* Konten Utama Hero */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 w-full flex flex-col items-start">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase text-brand-muted mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-muted"></span>
            Selamat Datang di 
          </h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            TEKNIK INFORMATIKA <br/>
            <span className="text-brand-muted">Universitas Sam Ratulangi</span>
          </h1>
          
          <p className="mt-6 text-brand-bg/80 max-w-xl leading-relaxed font-light text-lg">
            Menjadi program studi unggul dalam riset dan pengembangan teknologi informasi masa kini di kawasan timur Indonesia.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* 🌟 TOMBOL INI SUDAH DIARAHKAN KE HALAMAN AKADEMIK */}
            <Link 
              to="/akademik" 
              className="bg-brand-muted text-brand-navy px-8 py-3.5 rounded-lg font-bold hover:bg-white transition shadow-[0_0_20px_rgba(170,192,225,0.3)] text-center"
            >
              Lihat Kurikulum ➔
            </Link>
            <Link 
              to="/fasilitas" 
              className="border border-brand-muted/50 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-muted/20 transition text-center"
            >
              Lihat Fasilitas
            </Link>
          </div>
        </div>
      </div>

      {/* ================= STATISTIK SECTION ================= */}
      <div className="relative z-20 container mx-auto px-4 -mt-16 md:-mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          
          <ScrollAnimate delay="delay-0">
            <div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(10,36,88,0.06)] border border-blue-50/50 hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand-navy/70 font-semibold tracking-wide text-sm mb-2">Mahasiswa Aktif</p>
              <h3 className="text-5xl font-extrabold text-brand-navy mb-3">
                ± <AnimasiAngka target={1085} />
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Talenta muda berprestasi yang siap menjadi inovator teknologi di masa depan.
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay="md:delay-[150ms]">
            <div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(10,36,88,0.06)] border border-blue-50/50 hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand-navy/70 font-semibold tracking-wide text-sm mb-2">Laboratorium Riset</p>
              <h3 className="text-5xl font-extrabold text-brand-navy mb-3">
                <AnimasiAngka target={4} /> Labs
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Fasilitas modern dengan ekosistem eksplorasi untuk pengalaman praktik terdepan.
              </p>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay="lg:delay-[300ms]">
            <div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_rgba(10,36,88,0.06)] border border-blue-50/50 hover:-translate-y-2 transition-transform duration-300">
              <p className="text-brand-navy/70 font-semibold tracking-wide text-sm mb-2">Kemitraan Industri</p>
              <h3 className="text-5xl font-extrabold text-brand-navy mb-3">
                ± <AnimasiAngka target={10} />
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Jaringan kerja sama strategis dengan berbagai perusahaan teknologi dan institusi.
              </p>
            </div>
          </ScrollAnimate>

        </div>
      </div>

      {/* ================= UNIVERSITAS SAM RATULANGI HEADLINE ================= */}
      <section className="container mx-auto max-w-5xl px-6 mb-20 relative z-10">
        <ScrollAnimate>
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_15px_40px_rgba(10,36,88,0.04)] border border-blue-50 flex flex-col items-center text-center relative overflow-hidden">
            
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
            
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-brand-navy/60 mb-3">
              Naungan Akademik
            </h2>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy mb-4 leading-tight">
              Universitas Sam Ratulangi
            </h3>
            
            <p className="text-brand-navy/70 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-medium">
              Sebagai salah satu perguruan tinggi negeri terkemuka di Indonesia Timur, Universitas Sam Ratulangi berkomitmen menyelenggarakan pendidikan yang unggul dan berbudaya. Di bawah naungan Fakultas Teknik, Program Studi Teknik Informatika terus melangkah maju menghasilkan lulusan yang adaptif terhadap akselerasi teknologi global.
            </p>
          </div>
        </ScrollAnimate>
      </section>

      {/* ================= PRESTASI & KEBANGGAAN SECTION DENGAN FOTO ================= */}
      <section className="container mx-auto max-w-5xl px-6 mb-24 relative z-10">
        <ScrollAnimate>
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-navy/60 mb-2">Rekam Jejak</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Prestasi & Kebanggaan IT UNSRAT</h3>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {daftarPrestasi.map((item, index) => (
            <ScrollAnimate 
              key={index}
              delay={index % 2 === 0 ? 'delay-0' : 'md:delay-[200ms]'}
            >
              <div className="bg-white p-5 rounded-[2rem] border border-blue-100 shadow-sm flex flex-col gap-4 hover:shadow-[0_15px_40px_rgba(10,36,88,0.06)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full">
                
                {/* Wadah Foto Dokumentasi yang Responsif */}
                {item.foto && (
                  <div className="w-full h-48 sm:h-52 md:h-56 rounded-2xl overflow-hidden relative bg-blue-50/30">
                    <img 
                      src={item.foto} 
                      alt={item.judul} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Detail Teks Informasi */}
                <div className="px-1 pb-2">
                  <h4 className="text-base sm:text-lg font-extrabold text-brand-navy leading-snug mb-2">
                    {item.judul}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-navy/70 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

              </div>
            </ScrollAnimate>
          ))}
        </div>

      </section>

    </div>
  )
}