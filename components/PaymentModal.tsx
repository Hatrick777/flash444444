import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, ShieldCheck, ArrowRight, Loader2, Send } from 'lucide-react';
import { PricingPlan, Order, PaymentMethod } from '../types';

const PAYMENT_METHODS: PaymentMethod[] = [
  { id: 'usdt-trc20', name: 'USDT', network: 'TRC20', address: 'TMGAFHBPrMdCATxymSPFLYiMHAjkwnpLmp', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=040' },
  { id: 'usdt-erc20', name: 'USDT', network: 'ERC20', address: '0x3E090e5978a31067616A33C2811cAD06a7568Ee9', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=040' },
  { id: 'usdt-bep20', name: 'USDT', network: 'BEP20', address: '0x3E090e5978a31067616A33C2811cAD06a7568Ee9', icon: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=040' },
  { id: 'eth', name: 'ETH', network: 'Ethereum', address: '0x3E090e5978a31067616A33C2811cAD06a7568Ee9', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040' },
  { id: 'bnb', name: 'BNB', network: 'BSC', address: '0x3E090e5978a31067616A33C2811cAD06a7568Ee9', icon: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=040' },
];

interface PaymentModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ plan, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [copied, setCopied] = useState(false);
  const [txHashUrl, setTxHashUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!plan) return null;

  const handleCopy = () => {
    if (selectedMethod) {
      navigator.clipboard.writeText(selectedMethod.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = async () => {
    if (!txHashUrl || !selectedMethod) return;
    setIsSubmitting(true);
    
    // Construct the automated message for the admin
    const message = `🚀 *NEW ASTRE FLASH ORDER*
━━━━━━━━━━━━━━━━━━━━
📦 *Plan:* ${plan.name}
💰 *Amount:* ${plan.amount}
💎 *Price Paid:* ${plan.price}
🌐 *Network:* ${selectedMethod.name} (${selectedMethod.network})
━━━━━━━━━━━━━━━━━━━━
🔗 *TX HASH URL:* 
${txHashUrl}
━━━━━━━━━━━━━━━━━━━━
*Status:* Pending Verification. Please inject liquidity once confirmed.`;

    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://t.me/AstreFlasher1?text=${encodedMessage}`;

    // Store order locally
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9).toUpperCase(),
      planId: plan.id,
      planName: plan.name,
      amount: plan.price,
      currency: selectedMethod.name,
      network: selectedMethod.network,
      txHash: txHashUrl,
      userWalletAddress: 'N/A', // Verification handled via TG direct message
      timestamp: Date.now(),
      status: 'pending'
    };

    const existingOrders = JSON.parse(localStorage.getItem('astre_orders') || '[]');
    localStorage.setItem('astre_orders', JSON.stringify([newOrder, ...existingOrders]));

    // Brief loading state for UX
    setTimeout(() => {
      window.open(telegramUrl, '_blank');
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-lg bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-8 border-b border-slate-50 flex items-center justify-between shrink-0">
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter italic text-slate-900">Protocol Settlement</h3>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">Order Tier: <span className="text-slate-900">{plan.name}</span></p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-50 rounded-xl transition-colors text-slate-400">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                <div className="mb-6">
                   <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Gateway Currency</h4>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => { setSelectedMethod(method); setStep(2); }}
                      className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 hover:border-yellow-500 hover:bg-slate-50 transition-all group shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 p-2.5 flex items-center justify-center border border-slate-100 group-hover:bg-white transition-colors">
                          <img src={method.icon} className="w-full h-full object-contain" alt={method.name} />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-black text-slate-900 uppercase tracking-widest">{method.name}</p>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{method.network} Network</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-900 transition-colors" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && selectedMethod && (
              <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                <div className="mb-8 p-6 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center gap-4">
                  <ShieldCheck className="w-6 h-6 text-yellow-600 shrink-0" />
                  <p className="text-xs text-yellow-800 leading-relaxed font-bold uppercase">
                    Transfer exactly <span className="text-slate-900 font-black">{plan.price}</span> to the {selectedMethod.network} vault address below.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1">Official Bridge Vault</label>
                    <div className="relative group">
                      <div className="w-full bg-slate-50 p-5 rounded-2xl border border-slate-100 font-mono text-xs break-all pr-14 text-slate-600 group-hover:bg-slate-100 transition-colors">
                        {selectedMethod.address}
                      </div>
                      <button 
                        onClick={handleCopy}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white border border-slate-100 hover:border-slate-300 rounded-xl transition-all shadow-sm active:scale-95"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-slate-400" />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3 ml-1">Explorer Transaction URL</label>
                    <input 
                      type="text"
                      value={txHashUrl}
                      onChange={(e) => setTxHashUrl(e.target.value)}
                      placeholder="https://tronscan.org/#/transaction/..."
                      className="w-full bg-slate-50 p-5 rounded-2xl border border-slate-100 focus:border-slate-900 focus:bg-white outline-none transition-all font-mono text-xs text-slate-900 placeholder:text-slate-300"
                    />
                    <p className="mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-tight italic">Paste the full public explorer link (Tronscan/Etherscan) for instant verification.</p>
                  </div>

                  <button 
                    disabled={!txHashUrl || isSubmitting}
                    onClick={handleSubmit}
                    className={`w-full py-6 rounded-2xl font-black uppercase tracking-widest text-[12px] transition-all flex items-center justify-center gap-3 ${
                      !txHashUrl ? 'bg-slate-100 text-slate-300 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-yellow-500 hover:text-black shadow-2xl shadow-slate-200 active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Confirm Payment & Verify <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <button onClick={() => setStep(1)} className="w-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 hover:text-slate-900 transition-colors py-2">
                    ← Switch Payment Asset
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-emerald-100">
                  <Check className="w-12 h-12 text-emerald-500" />
                </div>
                <h4 className="text-3xl font-black uppercase tracking-tighter italic mb-4 text-slate-900">Redirecting...</h4>
                <p className="text-slate-500 text-[12px] leading-relaxed max-w-xs mx-auto mb-10 font-bold uppercase tracking-wider">
                  Redirecting to Telegram for final validation. Your <span className="text-slate-900">{plan.amount}</span> bridge will be processed by our admin immediately.
                </p>
                
                <a 
                  href={`https://t.me/AstreFlasher1`}
                  target="_blank"
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all flex items-center justify-center gap-2 hover:bg-yellow-500 hover:text-black mb-4 shadow-xl shadow-slate-200"
                >
                  Open Telegram App <Send className="w-4 h-4" />
                </a>
                
                <button 
                  onClick={onClose}
                  className="w-full py-4 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:bg-slate-100"
                >
                  Return to Terminal
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentModal;