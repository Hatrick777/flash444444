import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Send, CheckCircle, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: "Select Tier",
    desc: "Choose the service level matching your requirements."
  },
  {
    icon: <Send className="w-6 h-6" />,
    title: "Onboarding",
    desc: "Connect with our elite verified admins at @astreflasher."
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Service Fee",
    desc: "Settle the tier access fee via secure crypto portal."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Flash Injected",
    desc: "Liquidity is bridged to your address within 1 second."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-4 text-slate-900">Seamless Integration</h2>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Onboarding to execution in under 120 seconds.</p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-slate-100" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative text-center group"
              >
                <div className="w-20 h-20 bg-white border border-slate-100 rounded-[2rem] mx-auto flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-slate-300 transition-all duration-500 relative z-10 shadow-sm">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-yellow-500 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-black text-black">
                    0{idx + 1}
                  </div>
                </div>
                <h3 className="text-lg font-black mb-3 text-slate-900 tracking-tight uppercase italic">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[180px] mx-auto font-medium">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;