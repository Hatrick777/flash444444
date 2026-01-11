import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ShieldCheck, Gem } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

const PLANS: PricingPlan[] = [
  {
    id: '1',
    name: "Starter Astra",
    price: "$30",
    amount: "30,000 USDT",
    validity: "2 Months",
    icon: <ShieldCheck className="w-5 h-5 text-slate-400" />,
    features: ["Stake.com Compatible", "Exness Trading Ready", "Instant Wallet Bridge", "2 Months Validity", "Standard Priority"],
    cta: "Select Starter",
    style: 'starter'
  },
  {
    id: '2',
    name: "Astra Professional",
    price: "$40",
    amount: "40,000 USDT",
    validity: "2 Months",
    popular: true,
    icon: <Star className="w-5 h-5 text-yellow-600" />,
    features: ["Stake & Roobet Compatible", "Exness & Quotex Optimized", "High-Speed Flash Bridge", "2 Months Validity", "Priority Confirmation", "Multi-Wallet Support"],
    cta: "Select Pro Tier",
    style: 'pro'
  },
  {
    id: '3',
    name: "Elite Astra",
    price: "$50",
    amount: "50,000 USDT",
    validity: "2 Months",
    icon: <Gem className="w-5 h-5 text-blue-500" />,
    features: ["All Gambling Site Access", "Quotex/Exness VIP Speed", "Full Institutional Bridge", "2 Months Validity", "Ultra-Low Latency", "Dedicated Flash Node", "24/7 VIP Concierge"],
    cta: "Claim Elite Status",
    style: 'elite'
  }
];

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section className="py-32 relative bg-slate-50/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-slate-900"
          >
            Elite <span className="text-yellow-600">Flash</span> Tiers
          </motion.h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-bold uppercase tracking-widest italic">
            Institutional-grade liquidity for the top 1%.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col p-[1px] rounded-[2.5rem] transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-yellow-500/50 to-transparent shadow-2xl shadow-yellow-200/50' 
                  : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/30'
              }`}
            >
              <div className={`flex-1 bg-white rounded-[2.45rem] p-10 flex flex-col min-h-[550px] ${plan.popular ? 'border-2 border-yellow-500/20' : ''}`}>
                <div className="flex items-center gap-3 mb-10">
                   <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">{plan.icon}</div>
                   <h3 className="text-lg font-black uppercase tracking-tighter text-slate-900 italic">{plan.name}</h3>
                </div>
                
                <div className="mb-10">
                   <p className="text-4xl font-black tracking-tighter text-slate-900 mb-1">{plan.price}</p>
                   <p className="text-xl font-black text-yellow-600 tracking-tighter uppercase">{plan.amount}</p>
                </div>

                <ul className="space-y-4 mb-12 flex-1">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-3 text-xs font-bold text-slate-500 tracking-tight">
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => onSelectPlan(plan)}
                  className="group w-full py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all bg-slate-900 text-white shadow-xl shadow-slate-900/20 hover:bg-yellow-500 hover:text-black hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;