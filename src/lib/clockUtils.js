/**
 * Utility functions murni JavaScript untuk interaktivitas Web Portofolio.
 * Digunakan untuk: Real-time Digital Clock, Dynamic Greeting, dan Console Branding.
 */

/**
 * Mendapatkan ucapan salam dinamis berdasarkan jam saat ini
 * @param {Date} date - Objek Date sekarang
 * @returns {{ text: string, icon: string }} Objek salam dan emoji
 */
export function getDynamicGreeting(date = new Date()) {
  const hours = date.getHours();

  if (hours >= 4 && hours < 11) {
    return { text: "Selamat Pagi", icon: "🌅" };
  } else if (hours >= 11 && hours < 15) {
    return { text: "Selamat Siang", icon: "☀️" };
  } else if (hours >= 15 && hours < 18) {
    return { text: "Selamat Sore", icon: "🌇" };
  } else {
    return { text: "Selamat Malam", icon: "🌙" };
  }
}

/**
 * Memformat waktu lokal Indonesia (WIB) secara real-time
 * @param {Date} date - Objek Date sekarang
 * @returns {{ timeStr: string, dateStr: string }}
 */
export function formatLiveClock(date = new Date()) {
  const timeStr = date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const dateStr = date.toLocaleDateString('id-ID', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return { timeStr, dateStr };
}

/**
 * Log interaktif ke Browser Console (F12) saat aplikasi dimuat
 */
export function printConsoleWelcome() {
  const styleTitle = 'background: #09090b; color: #38bdf8; font-size: 14px; font-weight: bold; padding: 4px 8px; border-radius: 4px; border: 1px solid #0284c7;';
  const styleBody = 'color: #94a3b8; font-size: 11px;';
  
  console.log('%c🚀 Portofolio Faisal Muzakky', styleTitle);
  console.log('%c⚡ Interactive JavaScript Loaded: Real-time Clock, Dynamic Greetings, & Responsive UI State.', styleBody);
}
