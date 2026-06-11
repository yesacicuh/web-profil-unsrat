import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Profil from './pages/profile'
import Dosen from './pages/dosen'

function App() {
  return (
    <BrowserRouter>
      {/* Background krem dan teks dasar navy */}
      <div className="min-h-screen bg-[#F6F0E4] text-[#0A2458] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/dosen" element={<Dosen />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App