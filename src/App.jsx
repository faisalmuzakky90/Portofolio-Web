import { useState } from 'react';
import { 
  Code2, 
  MapPin, 
  GraduationCap, 
  Award, 
  Copy, 
  Check, 
  ExternalLink, 
  Gamepad2, 
  Layers, 
  Cpu, 
  ArrowUpRight,
  Mail,
  FolderGit2,
  X,
  FileText
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './components/Icons';

// React Bits Components
import SpotlightCard from './components/reactbits/SpotlightCard';
import Galaxy from './components/reactbits/Galaxy';
import GradientText from './components/reactbits/GradientText';
import ShinyText from './components/reactbits/ShinyText';
import ContactAndTable from './components/ContactAndTable';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null); // { title: string, file: string }
  const email = "faisalmuzakky90@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 cyber-grid selection:bg-zinc-800 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background khusus HP (Gerak halus tapi ringan) */}
      <div className="md:hidden fixed inset-0 z-0 pointer-events-none mobile-soft-bg opacity-90" />
      {/* Background Galaxy Asli (Sudah dioptimasi agar ringan & tidak lag saat zoom) */}
      <div className="hidden md:block fixed inset-0 z-0 pointer-events-none opacity-85">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.7}
          glowIntensity={0.25}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.25}
          rotationSpeed={0.05}
          starSpeed={0.3}
          speed={0.8}
        />
      </div>

      {/* Subtle top vignette */}
      <div className="pointer-events-none fixed inset-0 z-0 radial-glow" />


      {/* Clean Modern Navbar */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/80 bg-[#09090b]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between px-6 py-3 md:py-4 gap-3 md:gap-0">
          
          {/* Baris Atas di HP: Logo & Tombol LinkedIn */}
          <div className="w-full flex items-center justify-between md:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/profile.png" 
                alt="Faisal Muzakky" 
                className="h-9 w-9 rounded-xl object-cover border border-zinc-800"
              />
              <div>
                <span className="font-semibold tracking-tight text-zinc-100 text-sm">Faisal Muzakky</span>
                <span className="block text-xs text-zinc-400">Software & Systems</span>
              </div>
            </div>

            {/* Tombol LinkedIn khusus tampilan HP */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="https://www.linkedin.com/in/faisal-muzakky-219793412?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-white"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Nav Links - Scrollable horizontal di HP, Tengah di Laptop */}
          <nav className="flex w-full md:w-auto items-center gap-1 overflow-x-auto no-scrollbar py-1 md:py-0">
            {[
              { label: 'Tentang', href: '#about' },
              { label: 'Proyek', href: '#projects' },
              { label: 'Keahlian', href: '#skills' },
              { label: 'Pendidikan', href: '#education' },
              { label: 'Dokumentasi', href: '#table-section' },
              { label: 'Pesan', href: '#form-section' },
              { label: 'Kontak', href: '#contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Kanan - Status badge + LinkedIn (Hanya tampil di Laptop/Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Tersedia untuk Magang & Kolaborasi
            </div>

            <a
              href="https://www.linkedin.com/in/faisal-muzakky-219793412?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-100 px-3.5 py-1.5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-white"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Bento Grid */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          
          {/* 1. Hero / Main Introduction (Bento Span 8) */}
          <SpotlightCard
            id="about"
            className="md:col-span-8 flex flex-col justify-between scroll-mt-24"
            spotlightColor="rgba(255, 255, 255, 0.05)"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-400 font-medium">
                <span>Universitas Gunadarma</span>
                <span className="text-zinc-600">•</span>
                <span>S1 Sistem Informasi</span>
              </div>

              {/* Flex Container untuk Nama & Foto Profil */}
              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                 <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                    <ShinyText 
                      text="Faisal Muzakky" 
                      disabled={false} 
                      speed={4} 
                      className="font-bold text-white tracking-tight"
                    />
                  </h1>
                  
                  <p className="mt-2 text-base font-medium text-zinc-400 sm:text-lg">
                    Pengembang Perangkat Lunak & Analis Sistem
                  </p>
                </div>

                {/* Foto Profil Utama Hero */}
                <img
                  src="/profile.png"
                  alt="Faisal Muzakky"
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl object-cover border border-zinc-800 bg-zinc-900 shrink-0 shadow-lg"
                />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base max-w-2xl">
                👋 Halo! <br />
                 Saya seorang mahasiswa Sistem Informasi yang berfokus pada perancangan sistem terstruktur, logika berorientasi objek (OOP) menggunakan Java, serta pengelolaan repositori kode yang rapi dengan Git & GitHub.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 pt-5 border-t border-zinc-800/80">
              <button
                type="button"
                onClick={() => setSelectedPdf({
                  title: 'Dokumen Portofolio & CV - Faisal Muzakky',
                  file: '/Portofolio_Faisal_Muzakky.pdf',
                  type: 'portfolio'
                })}
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-white cursor-pointer"
              >
                <span>Lihat Portofolio</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-zinc-500" />}
                <span>{copied ? "Email Tersalin!" : "Salin Email"}</span>
              </button>
            </div>
          </SpotlightCard>

          {/* 2. Location & Quick Details (Bento Span 4) */}
          <SpotlightCard
            className="md:col-span-4 flex flex-col justify-between"
            spotlightColor="rgba(255, 255, 255, 0.05)"
          >
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Informasi Singkat
              </div>

              <div className="mt-5 flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Tangerang, Banten</div>
                  <div className="text-xs text-zinc-400">Indonesia (WIB / GMT+7)</div>
                </div>
              </div>

              <div className="mt-6 space-y-2 border-t border-zinc-800/80 pt-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Status</span>
                  <span className="font-medium text-zinc-300">Mahasiswa Aktif (2024 - Sekarang)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Program</span>
                  <span className="font-medium text-zinc-300">S1 Sistem Informasi</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Bahasa Utama</span>
                  <span className="font-medium text-zinc-300">Java (OOP)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 text-xs text-zinc-400">
              <span className="font-medium text-zinc-300">Minat:</span> Software Engineering, Systems Analysis & Architecture, Database Design.
            </div>
          </SpotlightCard>

          {/* 3. Featured Project: Magic Tiles Indonesia (Bento Span 7) */}
          <SpotlightCard
            id="projects"
            className="md:col-span-7 flex flex-col justify-between scroll-mt-24"
            spotlightColor="rgba(255, 255, 255, 0.06)"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-300 font-medium">
                  <Gamepad2 className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Proyek Unggulan</span>
                </div>
                <span className="text-xs text-zinc-500">Game Development</span>
              </div>

              <div className="mt-4">
                <GradientText
                  colors={["#A855F7", "#C084FC", "#E879F9"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-2xl font-bold tracking-tight sm:text-3xl"
                >
                  Magic Tiles Indonesia
                </GradientText>
              </div>
              
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Permainan interaktif bertema ritme musik Indonesia yang dibangun menggunakan bahasa pemrograman Java. Mengedepankan arsitektur Object-Oriented Programming (OOP) untuk pemisahan logika permainan, rendering, dan manajemen skor.
              </p>

              <div className="mt-5 space-y-2.5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 text-xs text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span><strong>Logika & Algoritma:</strong> Merancang implementasi game loop, deteksi ritme permainan, dan perhitungan skor secara dinamis.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                  <span><strong>Kolaborasi & Manajemen Kode:</strong> Mengelola struktur repositori dan version control menggunakan Git & GitHub.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-zinc-800/80 pt-4">
              {['Java', 'Object-Oriented Programming', 'Game Logic', 'Git', 'GitHub'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-zinc-800 bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-400 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* 4. Skills & Competencies (Bento Span 5) */}
          <SpotlightCard
            id="skills"
            className="md:col-span-5 flex flex-col justify-between scroll-mt-24"
            spotlightColor="rgba(255, 255, 255, 0.05)"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
                <Cpu className="h-4 w-4 text-zinc-400" />
                <span>Keahlian & Kemampuan</span>
              </div>

              <h2 className="mt-3 text-xl font-bold tracking-tight text-white">
                Kompetensi Teknis
              </h2>

              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-xs font-semibold text-zinc-400 mb-2">Pemrograman & Paradigma</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Java</span>
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Object-Oriented Programming (OOP)</span>
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Web Basics</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-zinc-400 mb-2">Analisis & Perancangan</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Systems Analysis</span>
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Pemodelan Alur Sistem</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-zinc-400 mb-2">Tools & Soft Skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Git & GitHub</span>
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Desain Grafis</span>
                    <span className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-200">Teamwork & Kolaborasi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-800/80 pt-4 text-xs text-zinc-500">
              Adaptif dan siap mempelajari arsitektur teknologi baru.
            </div>
          </SpotlightCard>

          {/* 5. Education (Bento Span 6) */}
          <SpotlightCard
            id="education"
            className="md:col-span-6 flex flex-col justify-between scroll-mt-24"
            spotlightColor="rgba(255, 255, 255, 0.05)"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-zinc-400">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  <span>Pendidikan Formal</span>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">S1 Sistem Informasi</span>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-300">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Universitas Gunadarma</h3>
                  <div className="text-xs font-medium text-zinc-300">S1 Sistem Informasi</div>
                  <div className="mt-1 text-xs text-zinc-500">2024 — Saat Ini • Tangerang, Banten</div>
                  <p className="mt-2.5 text-xs leading-relaxed text-zinc-400">
                    Mendalami rekayasa perangkat lunak, analisis proses bisnis, dan arsitektur data untuk mentransformasikan kebutuhan organisasi menjadi solusi digital yang efektif.
                  </p>
                </div>
              </div>

              {/* Fokus Pembelajaran / Mata Kuliah Utama (100% Pure Matte Monochrome) */}
              <div className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3.5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2.5">
                  Fokus Studi & Kompetensi Inti
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-1.5 text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    <span>Pemrograman OOP (Java)</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-1.5 text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    <span>Analisis & Desain Sistem</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-1.5 text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    <span>Basis Data Relasional</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-1.5 text-zinc-300">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    <span>Pengembangan Web Modern</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-zinc-800/80 pt-3 text-xs text-zinc-500">
              <span>Status Akademik</span>
              <span className="text-zinc-300">Mahasiswa Aktif (Tingkat Sarjana)</span>
            </div>
          </SpotlightCard>

          {/* 6. Certification & Training (Bento Span 6) */}
          <SpotlightCard
            className="md:col-span-6 flex flex-col justify-between"
            spotlightColor="rgba(255, 255, 255, 0.05)"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-medium text-zinc-400">
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Sertifikasi & Seminar Akademik</span>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">2 Dokumen</span>
              </div>

              <div className="mt-4 space-y-4">
                {/* Sertifikat 1 */}
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3.5 transition-colors hover:border-zinc-700/80 hover:bg-zinc-900/70">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white leading-tight">
                          International Lecture Participant
                        </h4>
                        <div className="text-xs text-zinc-300 mt-0.5">
                          "The Synergizing Markets and Minds"
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-1">
                          Universitas Gunadarma & Peter the Great St. Petersburg Polytech • Nov 2025
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-zinc-800/60 pt-2.5">
                    <span className="text-[11px] text-zinc-400">Tingkat Internasional</span>
                    <button
                      type="button"
                      onClick={() => setSelectedPdf({
                        title: 'International Lecture - The Synergizing Markets and Minds',
                        file: '/sertifikat-international-lecture.pdf'
                      })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/60 px-2.5 py-1 text-[11px] font-medium text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white cursor-pointer"
                    >
                      <span>Lihat PDF</span>
                      <ExternalLink className="h-3 w-3 text-zinc-400" />
                    </button>
                  </div>
                </div>

                {/* Sertifikat 2 */}
                <div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3.5 transition-colors hover:border-zinc-700/80 hover:bg-zinc-900/70">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300">
                        <Award className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white leading-tight">
                          Seminar Membangun SDM Kompeten Era 4.0
                        </h4>
                        <div className="text-xs text-zinc-300 mt-0.5">
                          LSP (Lembaga Sertifikasi Profesi) Gunadarma
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-1">
                          Universitas Gunadarma • September 2024
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-zinc-800/60 pt-2.5">
                    <span className="text-[11px] text-zinc-400">Kompetensi & Profesi</span>
                    <button
                      type="button"
                      onClick={() => setSelectedPdf({
                        title: 'Seminar Membangun SDM Kompeten - LSP Gunadarma',
                        file: '/sertifikat-seminar-lsp.pdf'
                      })}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/60 px-2.5 py-1 text-[11px] font-medium text-zinc-200 transition-colors hover:bg-zinc-700 hover:text-white cursor-pointer"
                    >
                      <span>Lihat PDF</span>
                      <ExternalLink className="h-3 w-3 text-zinc-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-zinc-800/80 pt-3 text-xs text-zinc-500">
              <span>Verifikasi Berkas</span>
              <span className="text-zinc-300">Tersedia Dokumen Asli (PDF)</span>
            </div>
          </SpotlightCard>

          {/* Bagian Tabel (Dokumentasi) & Form (Pesan) */}
          <ContactAndTable />

          {/* 7. Connect / Contact Section (Bento Span 12 - Full Width - Sekarang Paling Bawah) */}
          <SpotlightCard
            id="contact"
            className="md:col-span-12 scroll-mt-24"
            spotlightColor="rgba(255, 255, 255, 0.05)"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-xl">
                <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
                  Kontak & Kolaborasi
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Mari Terhubung dan Berdiskusi
                </h2>
                <p className="mt-2 text-sm text-zinc-400">
                  Terbuka untuk kesempatan magang, proyek rekayasa perangkat lunak, maupun diskusi seputar analisis sistem.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/faisal-muzakky-219793412?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-950 transition-colors hover:bg-white"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>Profil LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                </a>

                <a
                  href="https://github.com/faisalmuzakky90/Magic-Tiles-Indonesia"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                </a>
                {/* Tombol Instagram Baru */}
                <a
                  href="https://instagram.com/faisalmuzakky90" // <-- Ganti dengan username IG kamu
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4 text-pink-500" />
                  <span>Instagram</span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-500" />
                </a>
              </div>
            </div>
          </SpotlightCard>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/80 bg-[#09090b] py-8 text-xs text-zinc-500">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Faisal Muzakky. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>Universitas Gunadarma</span>
            <span className="text-zinc-700">•</span>
            <span>S1 Sistem Informasi</span>
          </div>
        </div>
      </footer>

      {/* Modal Preview PDF Interaktif (Super Ringan & Anti-Download Otomatis) */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative flex flex-col w-full max-w-4xl h-[85vh] rounded-2xl border border-zinc-800 bg-[#0e0f12] shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800 bg-zinc-900/60">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-800 text-zinc-300">
                  {selectedPdf.type === 'portfolio' ? (
                    <FileText className="h-4 w-4" />
                  ) : (
                    <Award className="h-4 w-4" />
                  )}
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-200 truncate">
                  {selectedPdf.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={selectedPdf.file}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                >
                  <span>Buka Tab Penuh</span>
                  <ExternalLink className="h-3 w-3 text-zinc-400" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedPdf(null)}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
                  title="Tutup Preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: PDF Viewer */}
            <div className="flex-1 w-full h-full bg-[#18181b] relative">
              <iframe
                src={`${selectedPdf.file}#toolbar=0`}
                title={selectedPdf.title}
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
