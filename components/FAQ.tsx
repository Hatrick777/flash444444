import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Send } from 'lucide-react';

const faqData = [
  {
    question: "Is flash crypto institutional safe?",
    answer: "Our liquidity originates from audited yield-bearing protocols and is processed through decentralized smart-contract bridges, ensuring total transparency and safety."
  },
  {
    question: "Supported wallet ecosystems?",
    answer: "We support the entire Web3 stack: MetaMask, Trust Wallet, Phantom (EVM), Ledger, and institutional custodians via WalletConnect."
  },
  {
    question: "Real-time delivery confirmation?",
    answer: "Delivery is atomic. Once the service fee clears, the liquidity bridge triggers within one block (approx 0.8s on modern networks)."
  },
  {
    question: "Priority concierge support?",
    answer: "Elite and Pro members gain access to a dedicated account manager 24/7/365 for bespoke integration and support."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 mb-2 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${isOpen ? 'text-yellow-600 italic' : 'text-slate-900 group-hover:text-yellow-600'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-2 rounded-lg ${isOpen ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-500 leading-relaxed font-medium text-lg max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="support" className="py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <div className="inline-flex p-3 bg-slate-50 rounded-2xl mb-8 border border-slate-100">
              <HelpCircle className="w-6 h-6 text-slate-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-[1.1] italic uppercase tracking-tighter text-slate-900">Elite Support <br /> Terminal</h2>
            <p className="text-slate-400 text-lg mb-8 font-medium">Bespoke assistance for institutional and retail flash liquidity clients.</p>
            <a 
              href="https://t.me/astreflasher" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-yellow-500 hover:text-black transition-all shadow-xl shadow-slate-200 active:scale-95"
            >
              Join Telegram <Send className="w-4 h-4" />
            </a>
          </div>
          
          <div className="lg:w-2/3">
            {faqData.map((item, idx) => (
              <FAQItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;