import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function FAQSection({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#0E0E11] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#E5FF3F] bg-[#E5FF3F]/10 px-3 py-1 rounded-full border border-[#E5FF3F]/20">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight mt-4 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-400">
            Everything you need to know before visiting Royal Gym & CrossFit in Sector 12 Gurugram.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {gymConfig.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#151519] border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-zinc-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E5FF3F] bg-[#E5FF3F]/10' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          Have another question?{' '}
          <a
            href={getWhatsAppLink("Hello! I have a question about Royal Gym & CrossFit:")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5FF3F] font-bold hover:underline"
          >
            Chat directly with us on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
