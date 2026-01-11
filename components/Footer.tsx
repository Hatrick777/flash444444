import React from 'react';
import { Twitter, Github, Send, Instagram, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://i.ibb.co/zVx4yt6p/logo.png";

  return (
    <footer className="pt-32 pb-16 border-t border-slate-100 bg-[#FAFAFB] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative w-12 h-12">
                <div className="relative w-full h-full rounded-full p-[1px] bg-slate-200 group-hover:bg-yellow-500 transition-all duration-500 overflow-hidden shadow-sm">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <img src={logoUrl} className="w-full h-full object-cover p-0" alt="Astre Logo" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase leading-none text-slate-900">ASTRE</span>
                <span className="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase mt-1">FLASHER ELITE</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-xs font-medium italic">Standardizing high-velocity flash liquidity for global protocols.</p>
            <div className="flex items-center gap-4">
              {[Twitter, Github, Send, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-11 h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm text-slate-400">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Ecosystem</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Starter Bridge</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Institutional Node</a></li>
              <li><a href="#" className="hover:text-yellow-600 transition-colors">Elite Tier Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Governance</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Audit Reports</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Service Terms</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-black mb-10 uppercase tracking-[0.2em] text-[10px]">Certification</h4>
            <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 relative group overflow-hidden shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-emerald-50 rounded-lg"><ShieldCheck className="w-5 h-5 text-emerald-500" /></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-900 uppercase">Secure Bridge</span>
                  <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest mt-0.5">SLA Active</span>
                </div>
              </div>
              <p className="text-[8px] font-black text-slate-200 uppercase tracking-[0.3em] group-hover:text-yellow-500 transition-colors">Network Live & Synced</p>
            </div>
          </div>
        </div>

        <div className="pt-16 border-t border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-10">
          <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.4em]">© 2024 ASTRE FLASHER PROTOCOL</p>
          <div className="flex items-center gap-8 text-[9px] font-black uppercase tracking-[0.2em]">
             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-slate-400">Node Sync</span></div>
             <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-900" /><span className="text-slate-400">Oracle Live</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;