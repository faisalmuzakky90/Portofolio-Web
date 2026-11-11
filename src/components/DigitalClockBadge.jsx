import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { getDynamicGreeting, formatLiveClock } from '../lib/clockUtils';

export default function DigitalClockBadge() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    // Timer interval JavaScript setiap 1 detik (1000ms)
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // Membersihkan timer saat komponen di-unmount
    return () => clearInterval(timer);
  }, []);

  const greeting = getDynamicGreeting(now);
  const { timeStr, dateStr } = formatLiveClock(now);

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/80 px-3.5 py-1.5 text-xs backdrop-blur-sm transition-all hover:border-zinc-700">
      {/* Pulsing indicator & emoji salam */}
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
        </span>
        <span className="text-sm select-none">{greeting.icon}</span>
      </div>

      {/* Teks Salam & Tanggal */}
      <span className="font-medium text-zinc-300 hidden sm:inline">
        {greeting.text},
      </span>
      <span className="text-zinc-500 text-[11px] hidden md:inline">
        {dateStr}
      </span>

      <span className="text-zinc-700 hidden sm:inline">•</span>

      {/* Jam Digital Realtime (Font Mono) */}
      <div className="flex items-center gap-1.5 font-mono text-zinc-100 font-semibold tracking-wider">
        <Clock className="h-3.5 w-3.5 text-cyan-400" />
        <span>{timeStr}</span>
        <span className="text-[10px] text-zinc-500 font-sans">WIB</span>
      </div>
    </div>
  );
}
