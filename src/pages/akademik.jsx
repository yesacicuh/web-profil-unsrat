import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules'
import ScrollAnimate from '../components/ScrollAnimate' // 🌟 Panggil komponen dari file terpusat

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// Import Logo Sesuai Path di Folder src/assets/
import logoUnity from '../assets/logo-unity.png'
import logoHme from '../assets/logo-hme.png'
import logoUpk from '../assets/logo-upk.png'
import logoBc from '../assets/logo-bc.png'
import logoKbm from '../assets/logo-kbm.png'

// KOMPONEN ACCORDION PER SEMESTER (RESPONSIVE LIST)
function AccordionItem({ title, courses, isOpen, onClick }) {
  const totalSKS = courses.reduce((sum, item) => sum + item.sks, 0)

  return (
    <div className="border border-blue-100 rounded-3xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        className="w-full flex justify-between items-center p-5 sm:p-6 bg-white hover:bg-blue-50/30 transition-colors focus:outline-none text-left"
        onClick={onClick}
      >
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy">{title}</h3>
          <p className="text-xs text-brand-navy/50 font-semibold mt-1">
            {courses.length} Mata Kuliah • Total {totalSKS} SKS
          </p>
        </div>
        <span className={`text-xl text-brand-muted transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 sm:p-6 pt-0 border-t border-blue-50/50">
          <div className="flex flex-col gap-3 mt-4">
            {courses.map((course, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-blue-50/20 rounded-2xl border border-blue-50 hover:bg-blue-50/60 transition-colors group gap-2">
                <div className="flex flex-col pr-0 sm:pr-4">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-brand-muted mb-1 tracking-wider uppercase">{course.kode}</span>
                  <span className="text-sm font-extrabold text-brand-navy leading-snug">{course.nama}</span>
                </div>
                <div className="shrink-0 self-start sm:self-center">
                  <span className="bg-white border border-blue-100 text-brand-navy px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm whitespace-nowrap group-hover:border-brand-muted/30 transition-colors">
                    {course.sks} SKS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Akademik() {
  const [kurikulumData, setKurikulumData] = useState({ wajib: [], pilihan: [] })
  const [openSemester, setOpenSemester] = useState(null)
  const [activeTab, setActiveTab] = useState('wajib')
  const [activeOrgIndex, setActiveOrgIndex] = useState(0)

  // Data Organisasi Disesuaikan dengan Informasi Deskripsi dan Logo Assets
  const daftarOrganisasi = [
    { 
      nama: "UNITY", 
      judul: "Unsrat IT Community", 
      desc: "UKM UNITY FT UNSRAT adalah Unit Kegiatan Mahasiswa di Fakultas Teknik UNSRAT yang fokus pada pengembangan teknologi informasi. Wadah ini menjadi tempat kolaborasi mahasiswa untuk mendalami bidang digital seperti pemrograman, kecerdasan buatan, dan keamanan siber melalui pelatihan, workshop, serta proyek riset teknologi.", 
      logo: logoUnity 
    },
    { 
      nama: "HME", 
      judul: "Himpunan Mahasiswa Elektro", 
      desc: "Himpunan Mahasiswa Elektro Fakultas Teknik Universitas Sam Ratulangi adalah organisasi jurusan bagi mahasiswa Teknik Elektro dan Teknik Informatika yang berfungsi sebagai wadah pengembangan akademik, penyalur aspirasi, dan pelaksana kegiatan mahasiswa.", 
      logo: logoHme 
    },
    { 
      nama: "UPK", 
      judul: "UPK Kr. FT UNSRAT", 
      desc: "Unit Pelayanan Kerohanian Kristen Fakultas Teknik Universitas Sam Ratulangi adalah organisasi keagamaan kampus yang berfungsi sebagai wadah pembinaan mental, spiritual, dan pelayanan bagi seluruh mahasiswa aktif Kristen di Fakultas Teknik.", 
      logo: logoUpk 
    },
    { 
      nama: "Blue Choir", 
      judul: "BPSMFT", 
      desc: "Biro Paduan Suara Mahasiswa Fakultas Teknik, wadah untuk mengembangkan minat, pengembangan bakat bernyanyi, kegiatan seremonial, protokol kampus, dan potensi di bidang olah vokal.", 
      logo: logoBc 
    },
    { 
      nama: "KBM", 
      judul: "KBM FT UNSRAT", 
      desc: "Keluarga Besar Mahasiswa Fakultas Teknik Universitas Sam Ratulangi adalah wadah tertinggi bagi mahasiswa aktif Teknik, dengan BEM sebagai lembaga eksekutif pelaksana kegiatan dan BPM sebagai lembaga legislatif pengawas serta penyalur aspirasi.", 
      logo: logoKbm 
    }
  ]

  useEffect(() => {
    fetch('/kurikulum.json')
      .then(res => res.json())
      .then(data => setKurikulumData(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="w-full bg-blue-50/50 min-h-screen flex flex-col pb-16 overflow-x-hidden">
      
      {/* CSS CUSTOM CAROUSEL - RESPONSIVE & INTERACTIVE ANIMATION OPTIMIZED */}
      <style>{`
        .org-swiper-wrapper {
          position: relative;
          width: 100%;
        }
        
        .org-swiper {
          padding-top: 20px;
          padding-bottom: 50px;
          overflow: visible !important;
        }

        /* Ukuran Kartu Bertingkat Sesuai Lebar Layar Device */
        .org-swiper .swiper-slide {
          width: 210px !important;  
          height: 310px !important;
          border-radius: 24px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0 !important; 
          visibility: hidden;
          pointer-events: none;
          cursor: pointer;
        }

        @media (min-width: 480px) {
          .org-swiper .swiper-slide {
            width: 240px !important; 
            height: 340px !important;
            border-radius: 28px;
          }
        }
        
        @media (min-width: 768px) {
          .org-swiper .swiper-slide {
            width: 280px !important; 
            height: 380px !important;
            border-radius: 32px;
          }
        }
        
        /* Formasi Samping (Kiri & Kanan) */
        .org-swiper .swiper-slide-prev,
        .org-swiper .swiper-slide-next {
          opacity: 0.4 !important;
          visibility: visible;
          filter: blur(1px) grayscale(20%);
          transform: scale(0.82) !important;
          pointer-events: auto;
        }

        /* Formasi Utama (Tengah) */
        .org-swiper .swiper-slide-active {
          opacity: 1 !important;
          visibility: visible;
          transform: scale(1.02) !important; 
          z-index: 20;
          pointer-events: auto;
        }

        .org-swiper .swiper-slide-active .org-card {
          box-shadow: 0 20px 50px rgba(10, 36, 88, 0.1);
        }

        /* Pagination Bullet */
        .org-swiper .swiper-pagination {
          bottom: 0px !important;
        }
        .org-swiper .swiper-pagination-bullet {
          background: #0A2458;
          opacity: 0.2;
          transition: all 0.3s;
        }
        .org-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 20px;
          border-radius: 10px;
        }

        /* KEYFRAMES ANIMASI FADE IN UNTUK TEKS DINAMIS */
        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-text-reveal {
          animation: textReveal 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        
        {/* ================= 1. HEADER (SUDAH DI TENGAH) ================= */}
        <ScrollAnimate>
          <div className="mb-10 text-center">
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-brand-navy/60 mb-2">Informasi Studi</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 leading-tight">Akademik & Organisasi</h1>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mt-5 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimate>

        {/* ================= 2. NAVIGASI TABS ================= */}
        <ScrollAnimate delay="md:delay-[100ms]">
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-blue-100 flex gap-2 overflow-x-auto max-w-full no-scrollbar">
              <button onClick={() => setActiveTab('wajib')} className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'wajib' ? 'bg-brand-navy text-white shadow-md' : 'text-brand-navy/60'}`}>Mata Kuliah Wajib</button>
              <button onClick={() => setActiveTab('pilihan')} className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'pilihan' ? 'bg-brand-navy text-white shadow-md' : 'text-brand-navy/60'}`}>Paket Peminatan</button>
            </div>
          </div>
        </ScrollAnimate>

        {/* ================= 3. SEKSI KURIKULUM ================= */}
        <section className="mb-24 sm:mb-32 max-w-4xl mx-auto">
          {activeTab === 'wajib' ? (
            <div className="w-full">
              {kurikulumData.wajib?.map((item, index) => (
                <ScrollAnimate key={index} delay={index % 2 === 0 ? 'delay-0' : 'md:delay-[50ms]'}>
                  <AccordionItem 
                    title={item.semester} 
                    courses={item.mataKuliah} 
                    isOpen={openSemester === item.semester} 
                    onClick={() => setOpenSemester(openSemester === item.semester ? null : item.semester)} 
                  />
                </ScrollAnimate>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {kurikulumData.pilihan?.map((paket, idx) => (
                <ScrollAnimate key={idx} delay={idx % 2 === 0 ? 'delay-0' : 'md:delay-[100ms]'}>
                  <div className="bg-white p-5 sm:p-6 rounded-3xl border border-blue-100 shadow-sm flex flex-col h-full hover:shadow-md transition-all">
                    <div className="border-b border-blue-50 pb-4 mb-4">
                      <span className="text-[10px] font-bold bg-blue-50 text-brand-navy px-2.5 py-1 rounded-md uppercase tracking-wider">Paket Pilihan</span>
                      <h4 className="text-lg font-extrabold text-brand-navy mt-2">{paket.peminatan}</h4>
                    </div>
                    <ul className="divide-y divide-blue-50/30 text-xs sm:text-sm font-medium text-brand-navy/80 flex-grow">
                      {paket.mataKuliah?.map((mk, mIdx) => (
                        <div key={mIdx} className="py-3 flex justify-between items-start gap-4">
                          <div>
                            <p className="font-semibold text-brand-navy leading-snug">{mk.nama}</p>
                            <span className="text-[10px] sm:text-[11px] font-mono text-brand-muted mt-1 inline-block">{mk.kode} • Semester {mk.semester}</span>
                          </div>
                          <span className="bg-blue-50 text-brand-navy px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold whitespace-nowrap">{mk.sks} SKS</span>
                        </div>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          )}
        </section>

        {/* ================= 4. SEKSI CAROUSEL ORGANISASI ================= */}
        <ScrollAnimate delay="md:delay-[150ms]">
          <section className="max-w-5xl mx-auto relative pt-6 pb-10">

            <div className="org-swiper-wrapper z-10">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={false} 
                slideToClickedSlide={true} 
                mousewheel={{ forceToAxis: true }} 
                coverflowEffect={{
                  rotate: 0,
                  stretch: 50,     
                  depth: 200,      
                  modifier: 1.2,     
                  slideShadows: false, 
                }}
                pagination={{ clickable: true }} 
                modules={[EffectCoverflow, Pagination, Mousewheel, Autoplay]}
                onActiveIndexChange={(swiper) => setActiveOrgIndex(swiper.activeIndex)}
                className="org-swiper"
              >
                {daftarOrganisasi.map((org, index) => (
                  <SwiperSlide key={index}>
                    <div className="org-card w-full h-full bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_10px_30px_rgba(10,36,88,0.04)] border border-blue-50/50 flex items-center justify-center p-6 sm:p-8 transition-all duration-500">
                      <img 
                        src={org.logo} 
                        alt={org.nama} 
                        className="w-28 h-28 sm:w-32 sm:h-32 md:w-44 md:h-44 object-contain mix-blend-multiply contrast-125 brightness-105" 
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* TEKS INFO DI BAWAH GAMBAR DENGAN ANIMASI REVEAL */}
            <div key={activeOrgIndex} className="animate-text-reveal text-center mt-6 px-2 sm:px-4 relative z-10">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
                <div className="h-[2px] w-8 sm:w-12 bg-brand-navy/20"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-brand-navy">
                  {daftarOrganisasi[activeOrgIndex]?.judul}
                </h3>
                <div className="h-[2px] w-8 sm:w-12 bg-brand-navy/20"></div>
              </div>
              <p className="text-brand-muted uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-4">
                {daftarOrganisasi[activeOrgIndex]?.nama}
              </p>
              <p className="text-brand-navy/70 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-medium min-h-[60px]">
                {daftarOrganisasi[activeOrgIndex]?.desc}
              </p>
            </div>

          </section>
        </ScrollAnimate>

      </div>
    </div>
  )
}