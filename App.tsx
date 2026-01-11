import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PaymentModal from './components/PaymentModal';
import { PricingPlan } from './types';
import { ShieldAlert } from 'lucide-react';

const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [securityStatus, setSecurityStatus] = useState<'safe' | 'monitoring'>('safe');

  useEffect(() => {
    // Subtle simulation of security scanning
    const interval = setInterval(() => {
      setSecurityStatus('monitoring');
      setTimeout(() => setSecurityStatus('safe'), 2000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-yellow-100 selection:text-black">
      {/* Security Status Toast */}
      <AnimatePresence>
        {securityStatus === 'monitoring' && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed bottom-10 right-10 z-[200] flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-800"
          >
            <ShieldAlert className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Hardened Shield Active</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        <Navbar />
        <Hero />
        <Features />
        <div id="plans" className="bg-slate-50/50">
          <Pricing onSelectPlan={(plan) => setSelectedPlan(plan)} />
        </div>
        <HowItWorks />
        <FAQ />
        <Footer />
        
        <AnimatePresence>
          {selectedPlan && (
            <PaymentModal 
              plan={selectedPlan} 
              onClose={() => setSelectedPlan(null)} 
            />
          )}
        </AnimatePresence>

        {/* Background Decorative Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-50/40 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-50/40 blur-[120px] rounded-full" />
        </div>
      </motion.main>
    </div>
  );
};

export default App;