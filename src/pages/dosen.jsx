import { useState, useEffect } from 'react'
import ScrollAnimate from '../components/ScrollAnimate' // 🌟 Sudah terimpor dengan benar

export default function Dosen() {
  const [dataDosen, setDataDosen] = useState([])
  
  // State untuk masing-masing filter
  const [kataKunci, setKataKunci] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterJabatan, setFilterJabatan] = useState('')
  const [filterBidang, setFilterBidang] = useState('')

  useEffect(() => {
    fetch('/dosen.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('File JSON tidak ditemukan')
        }
        return response.json()
      })
      .then(data => setDataDosen(data))
      .catch(error => console.error("Gagal mengambil data:", error))
  }, [])

  // Mengambil opsi unik secara otomatis dari data JSON untuk dropdown
  const opsiStatus = [...new Set(dataDosen.map(d => d.status))].filter(Boolean)
  const opsiJabatan = [...new Set(dataDosen.map(d => d.jabatan))].filter(Boolean)
  const opsiBidang = [...new Set(dataDosen.map(d => d.bidang))].filter(Boolean)

  // Logika Filter Gabungan
  const dosenTerfilter = Array.isArray(dataDosen) ? dataDosen.filter((dosen) => {
    const nama = dosen?.nama || ''
    const nip = dosen?.nip || ''
    const status = dosen?.status || ''
    const jabatan = dosen?.jabatan || ''
    const bidang = dosen?.bidang || ''
    
    const cocokKataKunci = nama.toLowerCase().includes(kataKunci.toLowerCase()) || 
                           nip.toLowerCase().includes(kataKunci.toLowerCase())
    const cocokStatus = filterStatus === '' || status === filterStatus
    const cocokJabatan = filterJabatan === '' || jabatan === filterJabatan
    const cocokBidang = filterBidang === '' || bidang === filterBidang
    
    return cocokKataKunci && cocokStatus && cocokJabatan && cocokBidang
  }) : []

  // ================= 📊 LOGIKA HITUNG STATISTIK OTOMATIS =================
  const totalDosenDanStaff = dataDosen.length
  const totalSesuaiFilter = dosenTerfilter.length

  // Menghitung jumlah Guru Besar (Profesor) & Lektor Kepala
  const jumlahPakar = dataDosen.filter(d => 
    d.jabatan === 'Guru Besar' || d.jabatan === 'Lektor Kepala'
  ).length

  // Menghitung Distribusi Jabatan Fungsional
  const hitungJabatan = (namaJabatan) => dataDosen.filter(d => d.jabatan === namaJabatan).length
  const statLektor = hitungJabatan('Lektor')
  const statAsistenAhli = hitungJabatan('Asisten Ahli')
  const statLektorKepala = hitungJabatan('Lektor Kepala')
  const statGuruBesar = hitungJabatan('Guru Besar')
  const statTenagaPengajar = hitungJabatan('Tenaga Pengajar')

  // Menghitung Distribusi Status Kerja
  const totalHomebase = dataDosen.filter(d => d.status === 'Homebase').length
  const totalNonHomebase = dataDosen.filter(d => d.status === 'Non-Homebase').length

  // Hitung persentase untuk lingkaran visual statis
  const persenHomebase = totalDosenDanStaff > 0 ? (totalHomebase / totalDosenDanStaff) * 100 : 0

  return (
    <div className="w-full bg-blue-50/50 min-h-screen flex flex-col pb-16 overflow-x-hidden">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        
        {/* ================= 1. HEADER (DENGAN ANIMASI) ================= */}
        <ScrollAnimate>
          <div className="mb-10 text-center">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-muted mb-2">
              Akademik
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
              Direktori Dosen
            </h1>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mt-5 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimate>

        {/* ================= 2. CARDS RINGKASAN UTAMA (DENGAN ANIMASI DELAY) ================= */}
        <ScrollAnimate delay="md:delay-[100ms]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Card 1: Total Dosen */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-100/40 flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-blue-50/70 text-brand-navy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-black text-brand-navy">{totalDosenDanStaff}</h3>
                <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mt-0.5">Total Dosen & Staff</p>
              </div>
            </div>

            {/* Card 2: Sesuai Filter */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-100/40 flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-blue-50/70 text-brand-navy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-black text-brand-navy">{totalSesuaiFilter}</h3>
                <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mt-0.5">Sesuai Filter Pencarian</p>
              </div>
            </div>

            {/* Card 3: Guru Besar & Lektor Kepala */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-blue-100/40 flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-green-50 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-black text-brand-navy">{jumlahPakar}</h3>
                <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mt-0.5">Guru Besar & Lektor Kepala</p>
              </div>
            </div>

          </div>
        </ScrollAnimate>

        {/* ================= 3. ANALISIS DISTRIBUSI (DENGAN ANIMASI DELAY) ================= */}
        <ScrollAnimate delay="md:delay-[200ms]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            
            {/* Box Kiri: Distribusi Status */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100/40 flex flex-col items-center justify-center">
              <h4 className="text-base font-extrabold text-brand-navy mb-6 self-start flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-navy rounded-full"></span>
                Proporsi Status Kepegawaian
              </h4>
              
              <div 
                className="relative w-44 h-44 flex items-center justify-center rounded-full shadow-sm" 
                style={{ 
                  backgroundImage: `conic-gradient(
                    #0E2F76 0% ${persenHomebase}%, 
                    #FEE2E2 ${persenHomebase}% 100%
                  )` 
                }}
              >
                <div className="absolute inset-0 m-5 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                  <span className="text-2xl font-black text-brand-navy">{totalDosenDanStaff}</span>
                  <span className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">Total Dosen</span>
                </div>
              </div>
              
              <div className="flex justify-center gap-6 mt-6 w-full text-xs font-semibold">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-brand-navy rounded-full"></span>
                  <span>Homebase ({totalHomebase})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-200 rounded-full"></span>
                  <span>Non-Homebase ({totalNonHomebase})</span>
                </div>
              </div>
            </div>

            {/* Box Kanan: Distribusi Jabatan Fungsional */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100/40 flex flex-col justify-between">
              <h4 className="text-base font-extrabold text-brand-navy mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-brand-muted rounded-full"></span>
                Struktur Jabatan Akademik
              </h4>
              <div className="space-y-4 font-medium">
                {[
                  { label: 'Lektor', count: statLektor },
                  { label: 'Asisten Ahli', count: statAsistenAhli },
                  { label: 'Lektor Kepala', count: statLektorKepala },
                  { label: 'Guru Besar / Profesor', count: statGuruBesar },
                  { label: 'Tenaga Pengajar', count: statTenagaPengajar }
                ].map((jab, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm py-1 border-b border-blue-50/50 last:border-0">
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-blue-50 text-brand-navy">
                        {idx + 1}
                      </span>
                      <span className="text-brand-navy/80 font-semibold">{jab.label}</span>
                    </div>
                    <span className="font-extrabold text-brand-navy">{jab.count} <span className="text-xs text-brand-muted font-normal">Orang</span></span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </ScrollAnimate>

        {/* ================= 4. FILTER SECTION (DENGAN ANIMASI) ================= */}
        <ScrollAnimate delay="md:delay-[250ms]">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-blue-100/40 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              
              {/* Input Pencarian */}
              <div className="relative group">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-brand-navy/40 group-focus-within:text-brand-navy transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input 
                  type="text" 
                  placeholder="Cari nama atau NIP..." 
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-brand-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-muted/50 focus:border-brand-muted text-brand-navy font-medium transition-all"
                  value={kataKunci}
                  onChange={(e) => setKataKunci(e.target.value)}
                />
              </div>

              {/* Dropdown Status */}
              <select 
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-muted/50 focus:border-brand-muted text-brand-navy font-medium transition-all appearance-none cursor-pointer"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230E2F76'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
              >
                <option value="">Semua Status</option>
                {opsiStatus.map((status, idx) => (
                  <option key={idx} value={status}>{status}</option>
                ))}
              </select>

              {/* Dropdown Jabatan */}
              <select 
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-muted/50 focus:border-brand-muted text-brand-navy font-medium transition-all appearance-none cursor-pointer"
                value={filterJabatan}
                onChange={(e) => setFilterJabatan(e.target.value)}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230E2F76'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
              >
                <option value="">Semua Jabatan</option>
                {opsiJabatan.map((jabatan, idx) => (
                  <option key={idx} value={jabatan}>{jabatan}</option>
                ))}
              </select>

            </div>

            {/* Baris 2: Bidang Keahlian */}
            <div className="w-full">
              <select 
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/20 bg-white focus:outline-none focus:ring-2 focus:ring-brand-muted/50 focus:border-brand-muted text-brand-navy font-medium transition-all appearance-none cursor-pointer"
                value={filterBidang}
                onChange={(e) => setFilterBidang(e.target.value)}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230E2F76'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
              >
                <option value="">Semua Bidang Keahlian</option>
                {opsiBidang.map((bidang, idx) => (
                  <option key={idx} value={bidang}>{bidang}</option>
                ))}
              </select>
            </div>
          </div>
        </ScrollAnimate>

        {/* Message data empty */}
        {dosenTerfilter.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-white/50 rounded-3xl border border-dashed border-brand-muted/30">
            <p className="text-xl text-brand-navy font-bold">Dosen tidak ditemukan.</p>
            <p className="text-brand-navy/60 mt-2">Coba sesuaikan pilihan filter atau kata kunci Anda.</p>
          </div>
        )}

        {/* ================= 5. GRID KARTU DOSEN (DIANIMASIKAN) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dosenTerfilter.map((dosen, index) => (
            <ScrollAnimate key={index} delay={index % 2 === 0 ? 'delay-0' : 'md:delay-[100ms]'}>
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 hover:border-brand-navy/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* BARIS STATUS BADGE */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                    dosen?.status === 'Homebase' ? 'bg-blue-50 text-brand-navy' : 'bg-red-50 text-red-600'
                  }`}>
                    {dosen?.status || '-'}
                  </span>
                  <span className="text-xs font-semibold text-brand-navy/50">
                    {dosen?.jabatan || '-'}
                  </span>
                </div>
                
                <h3 className="text-lg font-extrabold text-brand-navy text-center mt-2 mb-6 leading-snug min-h-[52px] flex items-center justify-center">
                  {dosen?.nama || 'Nama Tidak Tersedia'}
                </h3>
                
                <div className="mt-auto pt-4 border-t border-blue-50 flex flex-col items-center">
                  <div className="mb-4 w-full">
                    <p className="text-[10px] font-bold bg-blue-50/50 text-brand-navy border border-blue-100 px-3 py-2 rounded-xl text-center uppercase tracking-wider leading-relaxed min-h-[40px] flex items-center justify-center">
                      {dosen?.bidang || '-'}
                    </p>
                  </div>
                  
                  <p className="text-xs text-brand-navy/40 font-mono tracking-widest uppercase mb-4">
                    NIP. {dosen?.nip || '-'}
                  </p>

                  {/* Tombol Portofolio */}
                  {dosen?.portofolio && (
                    <a 
                      href={dosen.portofolio}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-block px-4 py-2 rounded-xl bg-brand-navy text-white text-xs font-bold text-center hover:bg-brand-muted hover:text-brand-navy transition-colors duration-300"
                    >
                      Portofolio ➔
                    </a>
                  )}
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

      </div>
    </div>
  )
}