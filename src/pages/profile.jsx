export default function Profil() {
  const visi = "Menjadi program studi yang unggul dalam inovasi teknologi, berbudaya, dan berdaya saing internasional";
  
  const misi = [
    "Menyelenggarakan pendidikan di bidang teknik informatika yang inovatif, adaptif, serta berbasis riset.",
    "Melaksanakan penelitian di bidang informatika yang berorientasi pada inovasi untuk kemajuan ilmu pengetahuan dan industri.",
    "Membangun lingkungan akademik yang kondusif dengan menanamkan nilai-nilai budaya dan etika profesional.",
    "Mengaplikasikan keilmuan teknologi informasi untuk memecahkan permasalahan masyarakat melalui pengabdian berbasis solusi.",
    "Membangun kemitraan dengan institusi global untuk memperkuat ekosistem inovasi di bidang teknologi informasi."
  ];

  const pimpinan = [
    { jabatan: "Kepala Jurusan", nama: "Alwin M. Sambul, S.T, M.Eng, Ph.D" },
    { jabatan: "Sekretaris Jurusan", nama: "Dringhuzen Jekke Mamahit, ST.MT" },
    { jabatan: "Koordinator Program Studi Teknik Informatika", nama: "Virginia Tulenan, SKom, MTI" }
  ];

  return (
    <div className="w-full bg-blue-50/50 min-h-screen pb-16">
      
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        
        {/* 1. SEJARAH SECTION */}
        <section className="mb-20">
          <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-navy/60 mb-2">Profil</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">Sejarah PSTI UNSRAT</h1>
          {/* Garis Aksen */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
          
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
        <section className="mb-16">
          <h3 className="text-3xl font-extrabold text-brand-navy mb-4 uppercase">VISI</h3>
          {/* Garis Aksen */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
          
          <div className="bg-brand-navy p-10 md:p-12 rounded-2xl text-white shadow-xl">
            <p className="text-2xl md:text-3xl font-light italic leading-relaxed">
              "{visi}"
            </p>
          </div>
        </section>

        {/* 3. MISI SECTION */}
        <section className="mb-20">
          <h3 className="text-3xl font-extrabold text-brand-navy mb-4 uppercase">MISI</h3>
          {/* Garis Aksen */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
          
          <div className="grid gap-6">
            {misi.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 md:p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-brand-muted/30 transition-all items-start md:items-center">
                <span className="text-brand-muted font-bold text-xl opacity-60">0{index + 1}</span>
                <p className="text-brand-navy/80 leading-relaxed md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PIMPINAN SECTION */}
        <section>
          <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Pimpinan</h2>
          {/* Garis Aksen */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>

          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm px-8 py-4">
            {pimpinan.map((item, index) => (
              <div 
                key={index} 
                className={`py-6 flex flex-col gap-1.5 ${
                  index !== pimpinan.length - 1 ? 'border-b border-blue-50/80' : ''
                }`}
              >
                <p className="text-[11px] font-bold text-brand-muted uppercase tracking-widest">
                  {item.jabatan}
                </p>
                <h4 className="text-lg font-bold text-brand-navy">
                  {item.nama}
                </h4>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}