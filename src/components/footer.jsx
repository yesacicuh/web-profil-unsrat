import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    // Background dibuat senada dengan Navbar (terang, efek kaca buram, dan border tipis)
    <footer className="bg-blue-50/60 backdrop-blur-md text-brand-navy pt-16 pb-8 border-t border-brand-muted/20 mt-auto transition-all duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Kolom 1: Info & Alamat */}
          <div className="md:col-span-5">
            <Link to="/" className="text-3xl font-black tracking-widest inline-block mb-6 hover:opacity-70 transition-opacity">
              IT<span className="text-brand-muted">UNSRAT</span>
            </Link>
            {/* Teks diubah menjadi navy agak redup */}
            <p className="text-brand-navy/70 leading-relaxed text-sm mb-6 pr-4 font-medium">
              Program Studi Teknik Informatika<br />
              Jurusan Teknik Elektro, Fakultas Teknik<br />
              Universitas Sam Ratulangi Manado.
            </p>
            <p className="text-sm text-brand-navy font-bold">
              Jl. Kampus UNSRAT Bahu, Manado 95115
            </p>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-navy">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm text-brand-navy/70 font-semibold">
              <li>
                <Link to="/" className="hover:text-brand-muted hover:translate-x-2 inline-block transition-transform duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/profil" className="hover:text-brand-muted hover:translate-x-2 inline-block transition-transform duration-300">
                  Profil & Visi Misi
                </Link>
              </li>
              <li>
                <Link to="/dosen" className="hover:text-brand-muted hover:translate-x-2 inline-block transition-transform duration-300">
                  Direktori Dosen
                </Link>
              </li>
              <li>
                <Link to="/akademik" className="hover:text-brand-muted hover:translate-x-2 inline-block transition-transform duration-300">
                  Akademik & Organisasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-navy">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-brand-navy/70 font-semibold">
              <li className="flex items-start gap-3">
                <span className="text-brand-muted text-lg leading-none">📧</span>
                <a href="mailto:informatika@unsrat.ac.id" className="hover:text-brand-muted transition-colors">
                  informatika@unsrat.ac.id
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-muted text-lg leading-none">📞</span>
                <span>(0431) 827XXX</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-muted text-lg leading-none">🌐</span>
                <a href="https://unsrat.ac.id" target="_blank" rel="noreferrer" className="hover:text-brand-muted transition-colors">
                  unsrat.ac.id
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= COPYRIGHT ================= */}
        {/* Garis batas diubah menjadi warna muted/20 agar tidak terlalu mencolok di background terang */}
        <div className="border-t border-brand-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-navy/50 font-bold">
          <p>© {new Date().getFullYear()} Teknik Informatika UNSRAT. All rights reserved.</p>
          <p className="flex items-center gap-1.5 tracking-wider">
            Dibuat dengan <span className="text-brand-muted text-sm">♥</span> untuk UKM Unity
          </p>
        </div>
      </div>
    </footer>
  )
}