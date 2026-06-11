export default function Profil() {
  const visi = "Menjadi program studi yang unggul dalam inovasi teknologi, berbudaya, dan berdaya saing internasional";
  
  const misi = [
    "Menyelenggarakan pendidikan di bidang teknik informatika yang inovatif, adaptif, serta berbasis riset.",
    "Melaksanakan penelitian di bidang informatika yang berorientasi pada inovasi untuk kemajuan ilmu pengetahuan dan industri.",
    "Membangun lingkungan akademik yang kondusif dengan menanamkan nilai-nilai budaya dan etika profesional.",
    "Mengaplikasikan keilmuan teknologi informasi untuk memecahkan permasalahan masyarakat melalui pengabdian berbasis solusi.",
    "Membangun kemitraan dengan institusi global untuk memperkuat ekosistem inovasi di bidang teknologi informasi."
  ];

  return (
    <div className="w-full bg-blue-50/50 min-h-screen">
      
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        
        {/* 1. SEJARAH SECTION */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-navy/60 mb-2">Profil</h2>
          <h1 className="text-4xl font-extrabold text-brand-navy mb-6">Sejarah PSTI UNSRAT</h1>
          <div className="w-16 h-1 bg-brand-muted mb-8 rounded"></div>
          
          <div className="space-y-6 text-brand-navy/80 leading-relaxed text-lg text-justify">
            <p>
              Program Studi Teknik Informatika (PSTI) di Jurusan Teknik Elektro Fakultas Teknik UNSRAT adalah pengembangan dari konsentrasi minat Teknik Informatika. Resmi mendapat ijin penyelenggaraan melalui SK Nomor 1689/D/T/2009, kegiatan operasional dimulai pada Juli 2010 dengan angkatan pertama sebanyak 83 mahasiswa.
            </p>
            <p>
              Setelah melewati perpanjangan ijin operasional pada 2012, PSTI terus bertransformasi. Pada tahun 2020, PSTI berhasil meraih <b>peringkat akreditasi A</b> dari BAN-PT. Pengakuan internasional pun diraih pada 16 Oktober 2022 melalui <b>sertifikasi AUN-QA</b>.
            </p>
            <p>
              Prestasi membanggakan kembali diukir pada tahun 2023 dan 2024, di mana PSTI menjadi satu-satunya program studi di UNSRAT yang berhasil mendapatkan hibah <b>Program Kompetisi Kampus Merdeka (PK-KM)</b> dari Kemenristek Dikti selama dua tahun berturut-turut.
            </p>
          </div>
        </section>

        {/* 2. VISI SECTION */}
        <section className="mb-20 bg-brand-navy p-10 rounded-2xl text-white shadow-xl">
          <h3 className="text-brand-muted font-bold tracking-widest uppercase mb-4">VISI</h3>
          <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
            "{visi}"
          </p>
        </section>

        {/* 3. MISI SECTION */}
        <section>
          <h3 className="text-2xl font-bold text-brand-navy mb-8">MISI</h3>
          <div className="grid gap-6">
            {misi.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-muted/30 transition-all">
                <span className="text-brand-muted font-bold text-xl">0{index + 1}</span>
                <p className="text-brand-navy/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  )
}