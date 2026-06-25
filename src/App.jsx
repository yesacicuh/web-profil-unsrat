import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer' // <-- Import komponen Footer
import Home from './pages/home'
import Profil from './pages/profile'
import Dosen from './pages/dosen'
import Akademik from './pages/akademik'
import Fasilitas from './pages/fasilitas' // 🌟 Import halaman fasilitas baru

function App() {
  return (
    <BrowserRouter>
      {/* Tambahkan flex dan flex-col agar Navbar, Konten, dan Footer tersusun rapi */}
      <div className="min-h-screen bg-[#F6F0E4] text-[#0A2458] font-sans flex flex-col">
        <Navbar />
        
        {/* flex-grow memastikan area konten memuai untuk mengisi layar kosong, 
            sehingga Footer selalu terdorong ke paling bawah */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/dosen" element={<Dosen />} />
            <Route path="/akademik" element={<Akademik />} />
            <Route path="/fasilitas" element={<Fasilitas />} /> {/* 🌟 Tambahkan rute ini */}
          </Routes>
        </main>

        {/* Pasang Footer di bagian paling bawah */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App