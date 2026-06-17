import { useState, useEffect } from 'react'

// KOMPONEN ACCORDION PER SEMESTER (VERSI RESPONSIVE LIST MASA KINI)
function AccordionItem({ title, courses, isOpen, onClick }) {
  // Hitung total SKS secara otomatis di setiap semester
  const totalSKS = courses.reduce((sum, item) => sum + item.sks, 0)

  return (
    <div className="border border-blue-100 rounded-3xl mb-4 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <button 
        className="w-full flex justify-between items-center p-6 bg-white hover:bg-blue-50/30 transition-colors focus:outline-none text-left"
        onClick={onClick}
      >
        <div>
          <h3 className="text-xl font-extrabold text-brand-navy">{title}</h3>
          <p className="text-xs text-brand-navy/50 font-semibold mt-1">
            {courses.length} Mata Kuliah • Total {totalSKS} SKS
          </p>
        </div>
        <span className={`text-xl text-brand-muted transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      {/* Animasi Buka Tutup Accordion */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 pt-0 border-t border-blue-50/50">
          
          {/* LIST FLEXBOX RESPONSIF */}
          <div className="flex flex-col gap-3 mt-4">
            {courses.map((course, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-4 bg-blue-50/20 rounded-2xl border border-blue-50 hover:bg-blue-50/60 transition-colors group"
              >
                {/* Bagian Kiri: Kode & Nama Mata Kuliah */}
                <div className="flex flex-col pr-4">
                  <span className="font-mono text-[11px] font-bold text-brand-muted mb-1 tracking-wider uppercase">
                    {course.kode}
                  </span>
                  <span className="text-sm font-extrabold text-brand-navy leading-snug">
                    {course.nama}
                  </span>
                </div>
                
                {/* Bagian Kanan: Badge SKS */}
                <div className="shrink-0">
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

// KOMPONEN HALAMAN UTAMA 
export default function Akademik() {
  const [kurikulumData, setKurikulumData] = useState({ wajib: [], pilihan: [] })
  const [openSemester, setOpenSemester] = useState(null)
  const [activeTab, setActiveTab] = useState('wajib')

  // Mengambil data dari public/kurikulum.json
  useEffect(() => {
    fetch('/kurikulum.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('File JSON kurikulum tidak ditemukan')
        }
        return response.json()
      })
      .then(data => setKurikulumData(data))
      .catch(error => console.error("Gagal memuat data kurikulum:", error))
  }, [])

  const handleToggle = (semester) => {
    setOpenSemester(openSemester === semester ? null : semester)
  }

  return (
    <div className="w-full bg-blue-50/50 min-h-screen flex flex-col pb-16">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        
        {/* HEADER SECTION - Rata Kiri */}
        <div className="mb-10 text-left">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-navy/60 mb-2">
            Informasi Studi
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Akademik & Organisasi
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
        </div>

        {/* TABS NAVIGATION (SWITCHER) - Tengah */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-1.5 rounded-2xl shadow-sm border border-blue-100 flex gap-2 overflow-x-auto w-full md:w-auto">
            <button
              onClick={() => setActiveTab('wajib')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                activeTab === 'wajib'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'text-brand-navy/60 hover:text-brand-navy'
              }`}
            >
              Mata Kuliah Wajib
            </button>
            <button
              onClick={() => setActiveTab('pilihan')}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                activeTab === 'pilihan'
                  ? 'bg-brand-navy text-white shadow-md'
                  : 'text-brand-navy/60 hover:text-brand-navy'
              }`}
            >
              Paket Peminatan 
            </button>
          </div>
        </div>

        {/* KONTEN DATA KURIKULUM */}
        <section className="mb-24 max-w-4xl">
          {activeTab === 'wajib' ? (
            <div className="w-full">
              {kurikulumData.wajib?.map((item, index) => (
                <AccordionItem 
                  key={index}
                  title={item.semester}
                  courses={item.mataKuliah}
                  isOpen={openSemester === item.semester}
                  onClick={() => handleToggle(item.semester)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kurikulumData.pilihan?.map((paket, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl border border-blue-100 shadow-sm flex flex-col h-full hover:shadow-md transition-all">
                  <div className="border-b border-blue-50 pb-4 mb-4">
                    <span className="text-[10px] font-bold bg-blue-50 text-brand-navy px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Paket Pilihan
                    </span>
                    <h4 className="text-lg font-extrabold text-brand-navy mt-2">{paket.peminatan}</h4>
                  </div>
                  <ul className="divide-y divide-blue-50/30 text-sm font-medium text-brand-navy/80 flex-grow">
                    {paket.mataKuliah?.map((mk, mIdx) => (
                      <div key={mIdx} className="py-3 flex justify-between items-start gap-4">
                        <div>
                          <p className="font-semibold text-brand-navy leading-snug">{mk.nama}</p>
                          <span className="text-[11px] font-mono text-brand-muted mt-1 inline-block">
                            {mk.kode} • Semester {mk.semester}
                          </span>
                        </div>
                        <span className="bg-blue-50 text-brand-navy px-2 py-0.5 rounded-md text-xs font-bold whitespace-nowrap">
                          {mk.sks} SKS
                        </span>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION ORGANISASI MAHASISWA - Rata Kiri, Tanpa Emoji */}
        <section className="max-w-5xl">
          <h3 className="text-3xl font-extrabold text-brand-navy mb-4">
            Komunitas & Organisasi Mahasiswa
          </h3>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Organisasi 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-300 to-brand-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div>
                <h4 className="text-xl font-extrabold text-brand-navy mb-2">Himpunan Mahasiswa Elektro (HME)</h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed font-medium">
                  Wadah pergerakan, pengembangan potensi diri, dan persaudaraan mahasiswa Teknik Elektro dan Teknik Informatika Universitas Sam Ratulangi. Berperan aktif membentuk karakter kepemimpinan yang adaptif dan solutif.
                </p>
              </div>
            </div>

            {/* Organisasi 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-300 to-brand-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div>
                <h4 className="text-xl font-extrabold text-brand-navy mb-2">UKM Unity</h4>
                <p className="text-sm text-brand-navy/70 leading-relaxed font-medium">
                  Komunitas unit kegiatan mahasiswa yang berfokus pada eksplorasi dan inovasi teknologi rekayasa perangkat lunak. Tempat yang sangat tepat untuk mengasah keterampilan praktis terapan, khususnya di lini Front-End pembangunan aplikasi.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}