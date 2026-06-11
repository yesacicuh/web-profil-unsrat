import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bgGedung from '../assets/gedung.jpeg'

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
  return (
    <div className="flex flex-col w-full bg-blue-50/50">
      
      {/* HERO SECTION */}
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

        {/* Konten Utama */}
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
            <Link 
              to="/kurikulum" 
              className="bg-brand-muted text-brand-navy px-8 py-3.5 rounded-lg font-bold hover:bg-white transition shadow-[0_0_20px_rgba(170,192,225,0.3)] text-center"
            >
              Explore More ➔
            </Link>
            <Link 
              to="/fasilitas" 
              className="border border-brand-muted/50 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-brand-muted/20 transition text-center"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

      {/* STATISTIK SECTION */}
      <div className="relative z-20 container mx-auto px-4 -mt-16 md:-mt-24 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <p className="text-brand-navy/70 font-semibold tracking-wide text-sm mb-2">Mahasiswa Aktif</p>
            <h3 className="text-5xl font-extrabold text-brand-navy mb-3">
              <AnimasiAngka target={1085} />±
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Talenta muda berprestasi yang siap menjadi inovator teknologi di masa depan.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <p className="text-brand-navy/70 font-semibold tracking-wide text-sm mb-2">Laboratorium Riset</p>
            <h3 className="text-5xl font-extrabold text-brand-navy mb-3">
              <AnimasiAngka target={4} /> Labs
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Fasilitas modern dengan ekosistem eksplorasi untuk pengalaman praktik terdepan.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <p className="text-brand-navy/70 font-semibold tracking-wide text-sm mb-2">Kemitraan Industri</p>
            <h3 className="text-5xl font-extrabold text-brand-navy mb-3">
              <AnimasiAngka target={10} />±
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Jaringan kerja sama strategis dengan berbagai perusahaan teknologi dan institusi.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}