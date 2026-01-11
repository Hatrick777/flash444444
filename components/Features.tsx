import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Clock } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    title: "Instant Bridging",
    description: "Proprietary high-frequency protocols ensure your liquidity arrives in under 1 second."
  },
  {
    icon: <Shield className="w-6 h-6 text-slate-900" />,
    title: "Tier-1 Security",
    description: "Multi-sig orchestration and end-to-end encryption for every cross-chain transfer."
  },
  {
    icon: <Globe className="w-6 h-6 text-slate-900" />,
    title: "Omni-Compatible",
    description: "Seamlessly integrates with MetaMask, Trust Wallet, Ledger, and institutional nodes."
  },
  {
    icon: <Clock className="w-6 h-6 text-slate-900" />,
    title: "24/7 Concierge",
    description: "Dedicated account executives available globally for elite priority troubleshooting."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-slate-50/80 relative overflow-hidden">
      {/* Subtle decorative elements for visibility */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-700 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Core Infrastructure
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-slate-900 italic">Unrivaled Execution</h2>
          <p className="text-slate-500 font-medium text-lg leading-relaxed">Standardizing elite liquidity delivery across the global crypto landscape with zero-compromise security.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:border-yellow-500/30 transition-all duration-500 group"
            >
              <div className="mb-10 p-5 inline-block bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-yellow-500 group-hover:border-yellow-600 transition-all duration-500 group-hover:shadow-[0_0_25px_rgba(234,179,8,0.3)]">
                <div className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-yellow-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;