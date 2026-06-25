import ScrollAnimate from '../components/ScrollAnimate' // 🌟 Panggil komponen dari file terpusat

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
    <div className="w-full bg-blue-50/50 min-h-screen pb-24 overflow-x-hidden">
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        
        {/* ================= 1. SEJARAH SECTION ================= */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold tracking-[0.3em] uppercase text-brand-navy/60 mb-2">
              Profil
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
              Sejarah Program Studi Teknik Informatika UNSRAT
            </h1>
            <div className="w-20 h-1.5 bg-gradient-to-r from-brand-navy to-brand-muted mt-5 mx-auto rounded-full"></div>
          </div>

          <ScrollAnimate>
            <div className="space-y-6 text-brand-navy/80 leading-relaxed text-base sm:text-lg text-justify font-medium">
              <p>
                Program Studi Teknik Informatika (PSTI) di Jurusan Teknik Elektro Fakultas Teknik UNSRAT adalah pengembangan dari konsentrasi minat Teknik Informatika. Resmi mendapat ijin penyelenggaraan melalui SK Nomor 1689/D/T/2009, kegiatan operasional dimulai pada Juli 2010 dengan angkatan pertama sebanyak 83 mahasiswa.
              </p>
              <p>
                Setelah melewati perpanjangan ijin operasional pada 2012, PSTI terus bertransformasi. Pada tahun 2020, PSTI berhasil meraih <strong className="text-brand-navy font-extrabold">peringkat akreditasi A</strong> dari BAN-PT. Pengakuan internasional pun diraih pada 16 Oktober 2022 melalui <strong className="text-brand-navy font-extrabold">sertifikasi AUN-QA</strong>.
              </p>
              <p>
                Prestasi membanggakan kembali diukir pada tahun 2023 dan 2024, di mana PSTI menjadi satu-satunya program studi di UNSRAT yang berhasil mendapatkan hibah <strong className="text-brand-navy font-extrabold">Program Kompetisi Kampus Merdeka (PK-KM)</strong> dari Kemenristek Dikti selama dua tahun berturut-turut.
              </p>
            </div>
          </ScrollAnimate>
        </section>

        {/* ================= 2. VISI SECTION ================= */}
        <section className="mb-16">
          <h3 className="text-3xl font-extrabold text-brand-navy mb-4 uppercase">VISI</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
          
          <ScrollAnimate>
            <div className="bg-brand-navy py-5 md:py-6 px-8 md:px-10 rounded-2xl text-white shadow-xl">
              <p className="text-2xl md:text-1xl font-light italic leading-relaxed">
                "{visi}"
              </p>
            </div>
          </ScrollAnimate>
        </section>

        {/* ================= 3. MISI SECTION (DENGAN ANIMASI CAHAYA KACA NAVY) ================= */}
        <section className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight mb-3 uppercase">
            MISI
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>
          
          <div className="grid gap-4">
            {misi.map((item, index) => (
              <ScrollAnimate 
                key={index}
                delay={index % 2 === 0 ? 'delay-0' : 'md:delay-[100ms]'}
              >
                <div className="group relative overflow-hidden flex gap-4 p-6 bg-white border border-blue-50 rounded-2xl shadow-sm hover:border-brand-navy/20 hover:shadow-md transition-all duration-300 items-start md:items-center cursor-default">
                  
                  {/* Efek Lapisan Cahaya Kaca Navy Transparan */}
                  <div className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none z-0"></div>

                  {/* Nomor Urut Misi */}
                  <span className="text-brand-muted font-black text-lg opacity-60 font-mono relative z-10">
                    0{index + 1}
                  </span>
                  
                  {/* Teks Deskripsi Misi */}
                  <p className="text-brand-navy/80 leading-relaxed font-semibold text-sm sm:text-base relative z-10">
                    {item}
                  </p>
                  
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </section>

        {/* ================= 4. PIMPINAN SECTION ================= */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight mb-3 uppercase">
            Pimpinan
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-navy to-brand-muted mb-8 rounded-full"></div>

          <ScrollAnimate>
            <div className="bg-white rounded-[2rem] border border-blue-100 shadow-sm px-8 py-4">
              {pimpinan.map((item, index) => (
                <div 
                  key={index} 
                  className={`py-6 flex flex-col gap-1.5 ${
                    index !== pimpinan.length - 1 ? 'border-b border-blue-50' : ''
                  }`}
                >
                  <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">
                    {item.jabatan}
                  </p>
                  <h4 className="text-base sm:text-lg font-extrabold text-brand-navy">
                    {item.nama}
                  </h4>
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </section>

      </div>
    </div>
  )
}