import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    // Mengubah bg-white/30 menjadi bg-blue-50/60 agar menyatu sempurna dengan background halaman
    <nav className="bg-blue-50/60 backdrop-blur-md border-b border-brand-muted/20 text-brand-navy p-5 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4 max-w-7xl">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold tracking-widest hover:opacity-70 transition-opacity whitespace-nowrap">
          IT<span className="text-brand-muted font-medium">UNSRAT</span>
        </Link>
        
        {/* TOMBOL STRIP 3 / HAMBURGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="block md:hidden focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // Icon Silang (X) 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Icon Garis 3 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* MENU UTAMA - DESKTOP */}
        <div className="hidden md:flex space-x-6 lg:space-x-8 text-sm uppercase tracking-widest font-semibold opacity-90">
          <Link to="/" className="hover:text-brand-muted transition duration-300">Beranda</Link>
          <Link to="/profil" className="hover:text-brand-muted transition duration-300">Profil & Visi Misi</Link>
          <Link to="/dosen" className="hover:text-brand-muted transition duration-300">Direktori Dosen</Link>
          <Link to="/akademik" className="hover:text-brand-muted transition duration-300">Akademik & Organisasi</Link>
        </div>

      </div>

      {/* MENU DROPDOWN - MOBILE */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-sm uppercase tracking-widest font-semibold opacity-90 border-t border-brand-muted/10 pt-4 px-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-brand-muted transition duration-300">Beranda</Link>
          <Link to="/profil" onClick={() => setIsOpen(false)} className="hover:text-brand-muted transition duration-300">Profil & Visi Misi</Link>
          <Link to="/dosen" onClick={() => setIsOpen(false)} className="hover:text-brand-muted transition duration-300">Direktori Dosen</Link>
          <Link to="/akademik" onClick={() => setIsOpen(false)} className="hover:text-brand-muted transition duration-300">Akademik & Organisasi</Link>
        </div>
      )}
    </nav>
  )
}