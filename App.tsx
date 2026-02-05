import React, { useState, useEffect } from 'react';
import { TOP_CONTACTS, FOOTER_SUPERVISION, MAP_EMBED_URL } from './constants';
import { ContactLink, SupervisionContact } from './types';

const AUTH_KEY = 'sp_auth_2026';
const CORRECT_PASSWORD = 'spchapai2026';
const EMERGENCY_HELP_NUMBER = '+8801320125626';

const toEnglishDigits = (str: string) => {
  const bd = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return str.replace(/[০-৯]/g, (d) => bd.indexOf(d).toString());
};

const ContactCard: React.FC<{ contact: ContactLink }> = ({ contact }) => {
  const dial = () => {
    window.location.href = `tel:${toEnglishDigits(contact.phone).replace(/[^\d+]/g, '')}`;
  };

  const iconMap: Record<string, string> = {
    'fa-building-columns': '🏛️',
    'fa-award': '🏅',
    'fa-user-shield': '🛡️',
    'fa-user-tie': '👔',
    'fa-tower-broadcast': '📡',
    'fa-shield-halved': '🛡️',
    'fa-fire-extinguisher': '🚒'
  };

  const iconKey = contact.icon.split(' ').pop() || '';

  return (
    <div 
      onClick={dial}
      className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-3 hover:shadow-md transition-all cursor-pointer flex items-center space-x-3 active:scale-[0.98]"
    >
      <div className={`${contact.iconColor} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg`}>
        {iconMap[iconKey] || '📞'}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-tight truncate">{contact.name}</h3>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">{contact.designation}</p>
        <div className="text-emerald-600 dark:text-emerald-400 font-bold text-xs">📞 {contact.phone}</div>
      </div>
    </div>
  );
};

const SupervisionCard: React.FC<{ contact: SupervisionContact }> = ({ contact }) => {
  const dial = () => window.location.href = `tel:${toEnglishDigits(contact.phone).replace(/[^\d+]/g, '')}`;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-100 dark:border-slate-800 text-center">
      <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 text-xl border border-indigo-50 dark:border-indigo-900/20 text-indigo-600">👤</div>
      <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{contact.name}</h4>
      <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-3">{contact.designation}</p>
      <div className="flex gap-2">
        <button onClick={dial} className="flex-1 bg-emerald-600 text-white py-2 rounded-lg text-xs font-bold active:scale-95">কল দিন</button>
        <a href={contact.profileUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 py-2 rounded-lg text-xs font-bold flex items-center justify-center">প্রোফাইল</a>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('t') === 'd');
  const [isAuthorized, setIsAuthorized] = useState(() => localStorage.getItem(AUTH_KEY) === 'true');
  const [passwordInput, setPasswordInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('t', dark ? 'd' : 'l');
  }, [dark]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === CORRECT_PASSWORD) {
      setIsAuthorized(true);
      localStorage.setItem(AUTH_KEY, 'true');
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setError(newAttempts >= 5 ? '৫ বার ভুল পাসওয়ার্ড দিয়েছেন!' : `ভুল পাসওয়ার্ড! (বাকি চেষ্টা: ${5 - newAttempts} বার)`);
      setPasswordInput('');
    }
  };

  if (!isAuthorized) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-6 ${dark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 border border-slate-100 dark:border-slate-800 text-center">
          <div className="text-4xl mb-6">{attempts >= 5 ? '🆘' : '🔒'}</div>
          <h1 className="text-xl font-bold mb-2">প্রবেশাধিকার যাচাই</h1>
          <p className="text-xs text-slate-500 mb-6">অ্যাপটি ব্যবহারের জন্য পাসওয়ার্ড দিন</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              disabled={attempts >= 5}
              placeholder="পাসওয়ার্ড..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 outline-none text-center"
              autoFocus
            />
            {error && <p className="text-[10px] text-red-500 font-bold">{error}</p>}
            {attempts < 5 ? (
              <button type="submit" className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold active:scale-95 shadow-lg shadow-emerald-500/20">প্রবেশ করুন</button>
            ) : (
              <button type="button" onClick={() => window.location.href=`tel:${EMERGENCY_HELP_NUMBER}`} className="w-full py-3 bg-red-600 text-white rounded-xl font-bold active:scale-95">
                <div className="text-xs">ডিউটি অফিসার, গোমস্তাপুর থানা</div>
                <div className="text-[10px] opacity-80">{EMERGENCY_HELP_NUMBER}</div>
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-8 transition-colors">
      <header className="bg-emerald-700 dark:bg-emerald-900 text-white pt-6 pb-32 px-4 rounded-b-[40px] shadow-lg relative z-0">
        <div className="max-w-4xl mx-auto flex justify-end">
          <button onClick={() => setDark(!dark)} className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-lg transition-transform active:scale-90">
            {dark ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="max-w-2xl mx-auto text-center mt-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Election Cell 2026</span>
          <h1 className="text-2xl md:text-4xl font-black mt-3 leading-tight">ত্রয়োদশ জাতীয় সংসদ নির্বাচন ২০২৬</h1>
          <p className="mt-4 text-[11px] md:text-sm leading-relaxed italic bg-black/10 p-3 rounded-xl inline-block border border-white/10">
            "একটি অবাধ ও সুষ্ঠ নির্বাচন আয়োজনে বাংলাদেশ পুলিশ দৃঢ়প্রতিজ্ঞ"
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
          {TOP_CONTACTS.map((c, i) => <ContactCard key={i} contact={c} />)}
        </div>

        {/* Improved Map Card Section */}
        <div className="relative group/card mb-8">
          <a 
            href={MAP_EMBED_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-center shadow-2xl border-2 border-slate-50 dark:border-slate-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 overflow-hidden relative"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover/card:scale-150 transition-transform duration-700"></div>
            
            <div className="relative flex flex-col items-center">
              <div className="mb-6">
                <div className="relative bg-white dark:bg-slate-800 w-20 h-20 md:w-24 md:h-24 rounded-3xl shadow-2xl flex items-center justify-center border-2 border-blue-50 dark:border-slate-700 group-hover/card:scale-110 transition-transform duration-500">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                </div>
              </div>

              <h4 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white mb-3 leading-tight">
                গোমস্তাপুর থানা ভোট কেন্দ্র মানচিত্র
              </h4>
              <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-bold max-w-sm mb-8 leading-relaxed">
                গুগল ম্যাপসে বিস্তারিত কেন্দ্র দেখতে নিচের বাটনে ক্লিক করুন
              </p>

              <div className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-2xl text-base md:text-lg font-black shadow-xl shadow-blue-700/20 group-hover/card:bg-blue-800 group-hover/card:shadow-blue-700/40 transition-all active:scale-95">
                <span>ম্যাপটি খুলুন</span>
                <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between items-center opacity-40">
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-slate-200">Interactive Map Preview</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-slate-200">Google My Maps</span>
            </div>
          </a>
        </div>

        {/* Map Usage Instructions */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
          <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3 text-sm md:text-base">
            <span className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">🗺️</span> 
            ম্যাপ ব্যবহারের সংক্ষিপ্ত নির্দেশনা
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <div className="bg-slate-50 dark:bg-slate-800 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 text-xl border border-slate-100 dark:border-slate-700">⛶</div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">ম্যাপ বড় করে দেখতে:</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">ডান পাশের ফুলস্ক্রিন বাটন [ ⛶ ] চাপুন।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-slate-50 dark:bg-slate-800 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 text-xl border border-slate-100 dark:border-slate-700">◧</div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">ইউনিয়ন খুঁজতে:</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">ম্যাপের বাম পাশে থাকা মেনু বাটন [ ◧ ] চাপুন, তারপর ইউনিয়ন নির্বাচন করুন।</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-slate-50 dark:bg-slate-800 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0 text-xl border border-slate-100 dark:border-slate-700">🔍</div>
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">ভোট/কেন্দ্র স্পষ্ট দেখতে:</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">ম্যাপের উপর জুম ইন করুন।</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-50 dark:border-slate-800 text-[10px] text-blue-600 dark:text-blue-400 font-bold italic text-center">
            ✨ মোবাইল ও কম্পিউটার—দুই জায়গাতেই একইভাবে কাজ করবে।
          </div>
        </section>

        <section className="mt-6">
          <a href="https://youtu.be/wBudmDxFQy4" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-red-600 text-white rounded-2xl font-bold text-sm shadow-xl shadow-red-500/20 transition-transform active:scale-[0.98]">
            ▶️ কিভাবে ভোট দিবেন? ভিডিও দেখুন
          </a>
        </section>

        <section className="mt-12">
          <h2 className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">সার্বিক দিকনির্দেশনায়</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FOOTER_SUPERVISION.map((p, i) => <SupervisionCard key={i} contact={p} />)}
          </div>
        </section>
      </main>

      <footer className="mt-12 py-8 text-center border-t border-slate-100 dark:border-slate-900">
        <p className="text-[10px] text-slate-400">© ২০২৬ গোমস্তাপুর থানা নির্বাচনী সেল, চাঁপাইনবাবগঞ্জ পুলিশ।</p>
      </footer>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
