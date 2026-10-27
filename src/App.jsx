import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer' 
import ScrollToTop from './components/ScrollToTop' // 🌟 Komponen agar halaman otomatis kembali ke atas

import Home from './pages/home'
import Profil from './pages/profile'
import Dosen from './pages/dosen'
import Akademik from './pages/akademik'
import Fasilitas from './pages/fasilitas' 

function App() {
  return (
    <BrowserRouter>
      {/* 🌟 Panggil ScrollToTop di dalam BrowserRouter */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#F6F0E4] text-[#0A2458] font-sans flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/dosen" element={<Dosen />} />
            <Route path="/akademik" element={<Akademik />} />
            <Route path="/fasilitas" element={<Fasilitas />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App