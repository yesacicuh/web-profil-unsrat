import { useState } from 'react'

export default function LightboxImage({ src, alt, className }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Gambar thumbnail yang dapat diklik */}
      <img 
        src={src} 
        alt={alt} 
        onClick={() => setIsOpen(true)}
        className={`${className} object-cover cursor-zoom-in hover:scale-[1.02] transition-transform duration-300 rounded-3xl`}
      />

      {/* Tombol penunjuk "Klik untuk memperbesar" */}
      <div 
        onClick={() => setIsOpen(true)}
        className="absolute bottom-6 right-6 bg-[#0A2458]/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full cursor-pointer shadow-md hover:bg-[#0A2458] transition-colors flex items-center gap-1.5 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
        </svg>
        Klik untuk memperbesar
      </div>

      {/* Modal / Lightbox (Ditampilkan di luar layout utama agar bebas bug) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0A2458]/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 z-[110] bg-white text-[#0A2458] p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center relative select-none">
            <img 
              src={src} 
              alt={alt} 
              className="max-w-full max-h-[90vh] object-contain rounded-3xl border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  )
}