import { useState, useEffect } from 'react'

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
    
    // Cek masing-masing kondisi (Jika dropdown kosong/Semua, maka bernilai true)
    const cocokKataKunci = nama.toLowerCase().includes(kataKunci.toLowerCase()) || 
                           nip.toLowerCase().includes(kataKunci.toLowerCase())
    const cocokStatus = filterStatus === '' || status === filterStatus
    const cocokJabatan = filterJabatan === '' || jabatan === filterJabatan
    const cocokBidang = filterBidang === '' || bidang === filterBidang
    
    // Dosen hanya akan tampil jika memenuhi SEMUA kondisi filter yang aktif
    return cocokKataKunci && cocokStatus && cocokJabatan && cocokBidang
  }) : []

  return (
    <div className="w-full bg-blue-50/50 min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-16 max-w-7xl">
        
        {/* ================= HEADER ================= */}
        <div className="mb-10">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-brand-muted mb-2">
            Akademik
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
            Dosen
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mt-5 rounded-full"></div>
        </div>

        {/* ================= FILTER SECTION (Sesuai Referensi Gambar) ================= */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-sm border border-white/50 mb-12">
          
          {/* Baris 1: Pencarian, Status, Jabatan */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            
            {/* Input Pencarian (Nama/NIP) */}
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

        {/* ================= PESAN JIKA DATA TIDAK DITEMUKAN ================= */}
        {dosenTerfilter.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-white/50 rounded-3xl border border-dashed border-brand-muted/30">
            <p className="text-xl text-brand-navy font-bold">Dosen tidak ditemukan.</p>
            <p className="text-brand-navy/60 mt-2">Coba sesuaikan pilihan filter atau kata kunci Anda.</p>
          </div>
        )}

        {/* ================= GRID KARTU DOSEN ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dosenTerfilter.map((dosen, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-300 to-brand-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="w-24 h-24 bg-blue-50 text-brand-navy flex items-center justify-center text-4xl font-black rounded-full mb-6 mx-auto group-hover:bg-brand-muted group-hover:text-white transition-all duration-500 ring-4 ring-transparent group-hover:ring-blue-100">
                {dosen?.nama ? dosen.nama.charAt(0) : '?'}
              </div>
              
              <h3 className="text-lg font-extrabold text-brand-navy text-center mb-1.5 leading-snug">
                {dosen?.nama || 'Nama Tidak Tersedia'}
              </h3>
              
              <p className="text-sm text-brand-navy/60 font-medium text-center mb-6">
                {dosen?.jabatan || '-'}
              </p>
              
              <div className="mt-auto pt-6 border-t border-blue-50 flex flex-col items-center">
                <div className="mb-4 w-full">
                  <p className="text-[10px] font-bold bg-blue-50/50 text-brand-navy border border-blue-100 px-3 py-2 rounded-xl text-center uppercase tracking-wider leading-relaxed">
                    {dosen?.bidang || '-'}
                  </p>
                </div>
                <p className="text-xs text-brand-navy/40 font-mono tracking-widest uppercase">
                  NIP. {dosen?.nip || '-'}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}