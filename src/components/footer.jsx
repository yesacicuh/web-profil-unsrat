import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    // Padding atas dan bawah dipangkas drastis (pt-8 pb-4)
    <footer className="bg-brand-navy text-white pt-8 pb-4 mt-auto transition-all duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Margin bawah dan gap antar kolom dirapatkan */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">

          {/* Kolom 1: Info & Alamat */}
          <div className="md:col-span-5">
            <Link to="/" className="text-xl font-black tracking-widest inline-block mb-2 hover:opacity-80 transition-opacity text-white">
              IT<span className="text-brand-muted">UNSRAT</span>
            </Link>
            {/* Margin teks diperkecil jadi mb-2 */}
            <p className="text-white/70 leading-relaxed text-[11px] sm:text-xs mb-2 pr-4 font-medium">
              Program Studi Teknik Informatika<br />
              Jurusan Teknik Elektro, Fakultas Teknik<br />
              Universitas Sam Ratulangi Manado.
            </p>
            <p className="text-[11px] sm:text-xs text-white font-bold">
              Jl. Kampus UNSRAT Bahu, Manado 95115
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div className="md:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold mb-3 uppercase tracking-wider text-white">Tautan Cepat</h4>
            {/* Jarak antar list dibuat sangat rapat (space-y-1) */}
            <ul className="space-y-1 text-[11px] sm:text-xs text-white/70 font-semibold">
              <li>
                <Link to="/" className="hover:text-brand-muted hover:translate-x-1 inline-block transition-transform duration-300">Beranda</Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-brand-muted hover:translate-x-1 inline-block transition-transform duration-300">Profil & Visi Misi</Link>
              </li>
              <li>
                <Link to="/dosen" className="hover:text-brand-muted hover:translate-x-1 inline-block transition-transform duration-300">Direktori Dosen</Link>
              </li>
              <li>
                <Link to="/akademik" className="hover:text-brand-muted hover:translate-x-1 inline-block transition-transform duration-300">Akademik & Organisasi</Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="md:col-span-4">
            <h4 className="text-xs sm:text-sm font-bold mb-3 uppercase tracking-wider text-white">Hubungi Kami</h4>
            <ul className="space-y-1 text-[11px] sm:text-xs text-white/70 font-semibold">
              <li className="flex items-center gap-2">
                <span className="text-brand-muted font-bold min-w-[55px]">Email</span>
                <span className="text-brand-muted">:</span>
                <a href="mailto:teknik.informatika@unsrat.ac.id" className="hover:text-brand-muted transition-colors text-white/90">
                  teknik.informatika@unsrat.ac.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-muted font-bold min-w-[55px]">Telepon</span>
                <span className="text-brand-muted">:</span>
                <span className="text-white/90">+62-431-823705</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-muted font-bold min-w-[55px]">Website</span>
                <span className="text-brand-muted">:</span>
                <a href="https://informatika.unsrat.ac.id" target="_blank" rel="noreferrer" className="hover:text-brand-muted transition-colors text-white/90">
                  informatika.unsrat.ac.id
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        {/* Jarak garis atas diperkecil (pt-4) dan ukuran font dibuat [10px] agar lebih rapi di bawah */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] text-white/50 font-bold">
          <p>© {new Date().getFullYear()} Teknik Informatika UNSRAT. All rights reserved.</p>
          <p className="tracking-wider">
            Dibuat dengan sepenuh hati untuk UKM Unity
          </p>
        </div>
      </div>
    </footer>
  )
}