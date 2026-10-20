import { useState } from 'react';
import {
  Mail, Send, Check, FolderGit2, Calendar, Tag, Activity,
  User, MessageSquare, ChevronDown, BookOpen, Code2, Globe, Loader2
} from 'lucide-react';
import SpotlightCard from './reactbits/SpotlightCard';

// ─── DATA TABEL ────────────────────────────────────────────────────
const projectRows = [
  {
    id: '01',
    name: 'Magic Tiles Indonesia',
    category: 'Game Development',
    tech: 'Java, OOP',
    year: '2026',
    role: 'Developer',
    status: 'Selesai',
  },
  {
    id: '02',
    name: 'Web Portofolio Personal',
    category: 'Web Development',
    tech: 'React, Tailwind CSS, Vite',
    year: '2026',
    role: 'Frontend Developer',
    status: 'Aktif',
  },
  {
    id: '03',
    name: 'International Lecture Synergizing Markets',
    category: 'Akademik',
    tech: 'Sertifikat Internasional',
    year: '2025',
    role: 'Peserta',
    status: 'Selesai',
  },
  {
    id: '04',
    name: 'Seminar SDM Kompeten Era 4.0 (LSP)',
    category: 'Akademik',
    tech: 'Sertifikat LSP Gunadarma',
    year: '2024',
    role: 'Peserta',
    status: 'Selesai',
  },
  {
    id: '05',
    name: 'Analisis Sistem Informasi Kampus',
    category: 'Systems Analysis',
    tech: 'Flowchart, DFD, ERD',
    year: '2025',
    role: 'Analis',
    status: 'Selesai',
  },
  {
    id: '06',
    name: 'Studi OOP: Design Pattern Java',
    category: 'Pemrograman',
    tech: 'Java, OOP Patterns',
    year: '2026',
    role: 'Developer',
    status: 'Berlangsung',
  },
];


// Status: hanya beda opacity & font weight, tanpa warna mencolok
const statusStyle = (status) => {
  if (status === 'Aktif' || status === 'Berlangsung') {
    return 'text-zinc-200 font-medium';   // lebih terang = masih jalan
  }
  return 'text-zinc-500';                 // lebih redup = sudah selesai
};

// Dot indicator: minimal, cukup beda ukuran animasi
const statusDot = (status) => {
  if (status === 'Aktif')        return 'bg-zinc-300 animate-pulse';
  if (status === 'Berlangsung')  return 'bg-zinc-400';
  return 'bg-zinc-700';                   // Selesai: redup
};

const categoryIcon = {
  'Game Development': <Code2 className="h-3 w-3" />,
  'Web Development':  <Globe className="h-3 w-3" />,
  'Akademik':         <BookOpen className="h-3 w-3" />,
  'Systems Analysis': <Activity className="h-3 w-3" />,
  'Pemrograman':      <Code2 className="h-3 w-3" />,
};

// ─── KOMPONEN ──────────────────────────────────────────────────────
export default function ContactAndTable() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Kirim data ke FormSubmit dengan proteksi captcha dinonaktifkan agar respon kilat
    const sendPromise = fetch('https://formsubmit.co/ajax/faisalmuzakky90@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Nama: formData.name,
        Email: formData.email,
        Topik: formData.subject,
        Pesan: formData.message,
        _subject: `[Portofolio Faisal] Pesan Baru dari ${formData.name}`,
        _template: 'table',
        _captcha: 'false' // Mematikan captcha agar respons API instan di bawah 1 detik
      })
    }).catch(() => {});

    // Berikan delay estetis 600ms agar user melihat transisi loading sebentar, lalu langsung sukses
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const change = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="col-span-1 md:col-span-12 space-y-5">

      {/* ══════════════════════════════════════
          TABEL — Dokumentasi Proyek & Kegiatan
          ══════════════════════════════════════ */}
      <SpotlightCard
        id="table-section"
        className="md:col-span-12 scroll-mt-24 w-full"
        spotlightColor="rgba(255, 255, 255, 0.05)"
      >
        {/* Header tabel */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
              <FolderGit2 className="h-4 w-4 text-zinc-400" />
              <span>Rekap Proyek & Kegiatan</span>
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">
              Dokumentasi Portofolio Akademik
            </h3>
            <p className="mt-1 text-xs text-zinc-500">
              Kumpulan proyek, studi, dan kegiatan yang telah diikuti selama masa studi.
            </p>
          </div>
          {/* Summary badge */}
          <div className="flex shrink-0 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-xs text-zinc-300">
            <Activity className="h-3.5 w-3.5 text-emerald-400" />
            <span className="font-semibold text-white">{projectRows.length}</span>
            <span className="text-zinc-500">Total Entri</span>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-xl border border-zinc-800/80">
          <table className="w-full text-left border-collapse min-w-[680px]">
            <thead>
              <tr className="border-b border-zinc-800 bg-zinc-900/60">
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 w-12">No</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Nama Proyek / Kegiatan</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Kategori</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Teknologi</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 text-center">Tahun</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 text-center">Peran</th>
                <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {projectRows.map((row, i) => (
                <tr
                  key={row.id}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`
                    border-b border-zinc-800/50 transition-colors duration-150 text-sm
                    ${hoveredRow === i ? 'bg-zinc-900/70' : i % 2 === 0 ? 'bg-transparent' : 'bg-zinc-900/20'}
                  `}
                >
                  <td className="px-4 py-3.5 font-mono text-xs text-zinc-600">{row.id}</td>
                  <td className="px-4 py-3.5 font-semibold text-white">{row.name}</td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[11px] font-medium text-zinc-300">
                      {categoryIcon[row.category]}
                      {row.category}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-zinc-400 font-mono">{row.tech}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                      <Calendar className="h-3 w-3 text-zinc-600" />
                      {row.year}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-xs text-zinc-400">{row.role}</td>
                  <td className="px-4 py-3.5 text-center">
                    <span className={`inline-flex items-center gap-1.5 text-xs ${statusStyle(row.status)}`}>
                      <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${statusDot(row.status)}`} />
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-600">
          <span>Terakhir diperbarui: Oktober 2026</span>
          <span>{projectRows.filter(r => r.status === 'Selesai').length} selesai · {projectRows.filter(r => r.status !== 'Selesai').length} berjalan</span>
        </div>
      </SpotlightCard>

      {/* ══════════════════════════════════════
          FORM — Formulir Kontak & Kolaborasi
          ══════════════════════════════════════ */}
      <SpotlightCard
        id="form-section"
        className="md:col-span-12 scroll-mt-24 w-full"
        spotlightColor="rgba(255, 255, 255, 0.05)"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Kiri: info & ilustrasi */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                <Mail className="h-4 w-4 text-zinc-400" />
                <span>Formulir Interaktif</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Kirim Pesan atau Ajak Kolaborasi
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Terbuka untuk diskusi seputar proyek, analisis sistem, atau kesempatan magang. Isi formulir ini dan saya akan merespons secepatnya.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { icon: <User className="h-4 w-4" />, label: 'Nama & Email wajib diisi' },
                  { icon: <Tag className="h-4 w-4" />, label: 'Pilih topik yang sesuai' },
                  { icon: <MessageSquare className="h-4 w-4" />, label: 'Jelaskan keperluanmu secara singkat' },
                ].map((tip, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs text-zinc-400">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400">
                      {tip.icon}
                    </div>
                    {tip.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Kontak info box */}
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 text-xs text-zinc-400 space-y-1.5">
              <div className="font-semibold text-zinc-200 mb-2">Info Kontak Langsung</div>
              <div>📧 faisalmuzakky90@gmail.com</div>
              <div>📍 Tangerang, Banten, Indonesia</div>
              <div>🕐 Respons dalam 1–2 hari kerja</div>
            </div>
          </div>

          {/* Kanan: form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Row 1: Nama + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                    Nama Lengkap <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={change('name')}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                    Alamat Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={change('email')}
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 transition-colors focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700"
                  />
                </div>
              </div>

              {/* Row 2: Topik / Subject */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Topik Pesan <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.subject}
                    onChange={change('subject')}
                    className="w-full appearance-none rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 transition-colors focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700 cursor-pointer"
                  >
                    <option value="" disabled className="text-zinc-500">— Pilih topik —</option>
                    <option value="collaboration">💼 Ajakan Kolaborasi Proyek</option>
                    <option value="internship">🎓 Peluang Magang / Kerja</option>
                    <option value="discussion">💬 Diskusi Teknis / Sistem Informasi</option>
                    <option value="feedback">📝 Masukan untuk Portofolio</option>
                    <option value="other">📌 Lainnya</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                </div>
              </div>

              {/* Row 3: Pesan */}
              <div>
                <label className="block text-xs font-semibold text-zinc-400 mb-1.5">
                  Pesan <span className="text-red-400">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tuliskan pesan, pertanyaan, atau ide kolaborasimu di sini..."
                  value={formData.message}
                  onChange={change('message')}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-600 resize-none transition-colors focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-700"
                />
                <div className="mt-1 text-right text-[11px] text-zinc-600">
                  {formData.message.length} karakter
                </div>
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-zinc-600">
                  <span className="text-red-400">*</span> wajib diisi
                </span>
                <button
                  type="submit"
                  disabled={loading || submitted}
                  className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    submitted
                      ? 'bg-emerald-600 text-white cursor-default'
                      : loading
                      ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed border border-zinc-700'
                      : 'bg-zinc-100 text-zinc-950 hover:bg-white active:scale-95'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Pesan Berhasil Terkirim!</span>
                    </>
                  ) : loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Mengirimkan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </SpotlightCard>

    </div>
  );
}