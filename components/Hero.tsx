import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] -mr-[400px] -mt-[400px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow-50/50 rounded-full blur-[120px] -ml-[300px] -mb-[300px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Live - Institutional Liquidity Active</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-slate-900"
        >
          Elite Flash <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-amber-600 to-yellow-400">Liquidity</span> 
          <br className="hidden md:block" /> For Modern Web3.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-medium"
        >
          High-velocity flash assets delivered with absolute precision. Experience the premier institutional bridge for global protocols.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-black rounded-xl transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:shadow-2xl hover:shadow-yellow-500/20 active:scale-95">
            <span className="flex items-center justify-center gap-2 uppercase tracking-widest text-xs">
              Buy Flash Crypto <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          <button className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 shadow-sm">
            View Pricing
          </button>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-slate-100 pt-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-slate-900 tracking-tighter">0.8s</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Avg Delivery</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-slate-900 tracking-tighter">100%</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Escrow Safety</span>
          </div>
          <div className="flex flex-col items-center gap-1 col-span-2 md:col-span-1">
            <span className="text-3xl font-black text-slate-900 tracking-tighter">9.4k+</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Global Clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;