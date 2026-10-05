import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Flame, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function InlineLeadBanner({ onOpenBooking }) {
  const [phone, setPhone] = useState('');
  const [goal, setGoal] = useState('Strength');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit number');
      return;
    }
    setError('');
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E5FF3F', '#FFFFFF', '#65a30d'],
      });
    } catch (e) {}
  };

  const whatsappMessage = `Hi Royal Gym & CrossFit! I'd like to book a free trial session. My phone is: ${phone}, Goal: ${goal}.`;

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B0D] via-[#151519] to-[#0B0B0D] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E5FF3F]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#151519] border border-[#E5FF3F]/30 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5FF3F]/10 text-[#E5FF3F] text-xs font-bold uppercase tracking-wider mb-4 border border-[#E5FF3F]/20">
                <Sparkles className="w-3.5 h-3.5" />
                Limited Trial Passes Each Week
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                Your Strongest Self <br />
                <span className="text-[#E5FF3F]">Starts Here.</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 mt-3 max-w-lg leading-relaxed">
                Claim a 100% complimentary day pass at Royal Gym & CrossFit in Sector 12 Gurugram. Test our barbells, machines, and CrossFit rig with zero pressure.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5FF3F]" />
                  <span>Full equipment access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5FF3F]" />
                  <span>Coach form assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5FF3F]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E5FF3F]" />
                  <span>Sector 12 local facility</span>
                </div>
              </div>
            </div>

            {/* Right Quick Form */}
            <div className="lg:col-span-5 bg-[#0B0B0D] p-6 sm:p-7 rounded-2xl border border-white/10 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                    Claim Free Pass
                  </h3>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Mobile Number
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-white/10 bg-[#1D1D23] text-xs text-zinc-300 font-semibold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        placeholder="98123 45678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#151519] border border-white/10 rounded-r-xl px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E5FF3F]"
                      />
                    </div>
                    {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
                      Fitness Focus
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-[#151519] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#E5FF3F]"
                    >
                      <option value="Muscle Building">Muscle Building</option>
                      <option value="Fat Loss">Fat Loss</option>
                      <option value="Strength">Strength</option>
                      <option value="CrossFit">CrossFit</option>
                      <option value="General Fitness">General Fitness</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#E5FF3F] text-[#0B0B0D] font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#D4EE2B] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(229,255,63,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5FF3F]"
                  >
                    <span>Book My Free Trial</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>

                  <p className="text-[10px] text-zinc-500 text-center">
                    Instant pass voucher confirmation sent to your phone.
                  </p>
                </form>
              ) : (
                <div className="text-center py-4 space-y-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#E5FF3F]/20 text-[#E5FF3F] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Trial Pass Reserved!</h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      We've reserved a pass for phone <strong>+91 {phone}</strong>.
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm on WhatsApp (1-Tap)</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setPhone('');
                    }}
                    className="text-[11px] text-zinc-400 hover:text-white underline"
                  >
                    Register another pass
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
