import React from 'react';
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function MembershipSection({ onOpenBooking }) {
  const handleSelectPlan = (planName) => {
    onOpenBooking(`Membership Plan: ${planName}`);
  };

  return (
    <section id="membership" className="py-20 sm:py-28 bg-[#0E0E11] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
            Sample Membership Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mt-4 mb-3">
            Simple, Transparent Memberships
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Flexible commitment options with zero hidden admission fees. All plans include full orientation and locker facilities.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5FF3F]" />
            <span>Sample Plans & Demo Pricing — Inquire for current seasonal offers</span>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {gymConfig.plans.map((plan) => {
            const isPop = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPop
                    ? 'bg-[#151519] border-2 border-[#E5FF3F] shadow-[0_0_40px_rgba(229,255,63,0.15)] lg:-translate-y-2'
                    : 'bg-[#151519]/70 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {isPop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#E5FF3F] text-[#0B0B0D] text-[11px] font-black uppercase tracking-wider shadow-md">
                    {plan.popularBadge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      {plan.name}
                    </span>
                    <span className="text-[11px] font-semibold text-[#E5FF3F] bg-[#E5FF3F]/10 px-2.5 py-0.5 rounded-full">
                      {plan.period}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {plan.price}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-400 block mt-1">
                      {plan.billing}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="h-px bg-white/10 mb-6" />

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                      What's Included:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                        <Check className="w-4 h-4 text-[#E5FF3F] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      isPop
                        ? 'bg-[#E5FF3F] text-[#0B0B0D] hover:bg-[#D4EE2B] shadow-[0_0_20px_rgba(229,255,63,0.3)]'
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-[10px] text-center text-zinc-500 mt-2.5">
                    No obligations • Free day pass trial included
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Corporate & Student Discount Notice */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl bg-[#151519] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#E5FF3F]/10 text-[#E5FF3F] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Looking for corporate packages or couple memberships?</p>
              <p className="text-xs text-zinc-400">Ask the front desk about special seasonal concessions for Sector 12 residents.</p>
            </div>
          </div>
          <a
            href={getWhatsAppLink("Hi! I would like to inquire about current membership deals and corporate rates at Royal Gym & CrossFit.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white whitespace-nowrap"
          >
            Inquire on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
