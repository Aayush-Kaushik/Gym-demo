import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Flame, Sparkles, Phone, User, Calendar, Clock, ArrowRight, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { gymConfig, getWhatsAppLink } from '../data/gymData';

export default function LeadModal({ isOpen, onClose, initialContext = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: 'Strength',
    preferredTime: 'Morning (6:00 AM – 9:00 AM)',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialContext) {
      setFormData((prev) => ({
        ...prev,
        notes: initialContext,
      }));
    }
  }, [initialContext]);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state upon closing
      setTimeout(() => {
        setIsSubmitted(false);
        setErrors({});
      }, 300);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Mock API submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#E5FF3F', '#FFFFFF', '#65a30d', '#ca8a04'],
        });
      } catch (err) {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }, 700);
  };

  // WhatsApp prefilled message
  const whatsappConfirmationText = `Hi Royal Gym & CrossFit! I just requested my Free Trial Pass on your website:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Primary Goal: ${formData.goal}
• Preferred Slot: ${formData.preferredTime}
${formData.notes ? `• Interest: ${formData.notes}` : ''}
Please confirm my slot time. Thanks!`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#151519] border border-white/20 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative text-white animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="bg-gradient-to-br from-[#1D1D23] to-[#151519] p-6 sm:p-7 border-b border-white/10 relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5FF3F]/10 text-[#E5FF3F] text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                Zero-Cost • No Obligation
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                Book Your Free Gym Trial
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Experience {gymConfig.businessName} in Sector 12, Gurugram. Tour the facility, meet our coaches, and train for free.
              </p>

              {initialContext && (
                <div className="mt-3 px-3 py-1.5 rounded-lg bg-black/40 border border-[#E5FF3F]/20 text-[11px] text-[#E5FF3F]">
                  Selected: <strong>{initialContext}</strong>
                </div>
              )}
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-[#E5FF3F]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0B0B0D] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E5FF3F] transition-colors"
                  />
                </div>
                {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Mobile Number (WhatsApp Preferred) <span className="text-[#E5FF3F]">*</span>
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-white/10 bg-[#1D1D23] text-xs text-zinc-300 font-semibold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="98123 45678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0B0B0D] border border-white/10 rounded-r-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#E5FF3F] transition-colors"
                  />
                </div>
                {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
              </div>

              {/* Fitness Goal Dropdown */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Primary Fitness Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full bg-[#0B0B0D] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E5FF3F] transition-colors"
                >
                  <option value="Muscle Gain">Muscle Gain / Hypertrophy</option>
                  <option value="Fat Loss">Fat Loss & Conditioning</option>
                  <option value="Strength">Raw Barbell Strength</option>
                  <option value="CrossFit">CrossFit & High Intensity</option>
                  <option value="General Fitness">General Fitness & Mobility</option>
                </select>
              </div>

              {/* Preferred Time Dropdown */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full bg-[#0B0B0D] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E5FF3F] transition-colors"
                >
                  <option value="Morning (6:00 AM – 9:00 AM)">Morning (6:00 AM – 9:00 AM)</option>
                  <option value="Mid-Day (9:00 AM – 12:00 PM)">Mid-Day (9:00 AM – 12:00 PM)</option>
                  <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#E5FF3F] text-[#0B0B0D] font-extrabold text-sm uppercase tracking-wider rounded-xl hover:bg-[#D4EE2B] hover:shadow-[0_0_25px_rgba(229,255,63,0.4)] transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Reserving Trial...</span>
                  ) : (
                    <>
                      <span>Book My Free Trial</span>
                      <ArrowRight className="w-4 h-4 stroke-[3]" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-center text-zinc-500 mt-2">
                  🔒 We respect your privacy. No spam. You will only receive trial confirmation.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="p-8 text-center animate-fade-in space-y-5">
            <div className="w-16 h-16 rounded-full bg-[#E5FF3F]/20 text-[#E5FF3F] border border-[#E5FF3F]/40 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(229,255,63,0.3)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs font-bold text-[#E5FF3F] uppercase tracking-wider">
                Pass Reserved Successfully!
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                Welcome, {formData.name}!
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-sm mx-auto leading-relaxed">
                Your free trial pass has been recorded for <strong className="text-white">{formData.goal}</strong> ({formData.preferredTime}).
              </p>
            </div>

            {/* Instant WhatsApp Verification Card */}
            <div className="p-4 rounded-2xl bg-[#0B0B0D] border border-white/10 text-left space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <MessageSquare className="w-4 h-4 text-[#E5FF3F]" />
                <span>Want instant slot confirmation?</span>
              </div>
              <p className="text-xs text-zinc-400">
                Send your pre-filled trial details directly to the front desk on WhatsApp for immediate priority scheduling:
              </p>
              <a
                href={getWhatsAppLink(whatsappConfirmationText)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp (1-Tap)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="text-xs font-semibold text-zinc-400 hover:text-white px-4 py-2"
              >
                Close & Return to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
