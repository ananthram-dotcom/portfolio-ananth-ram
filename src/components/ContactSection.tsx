import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Development',
    timeline: 'Standard Sprint (1-2 Weeks)',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }

    // Check if Web3Forms Access Key is defined (either from env or fallback)
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY';

    if (accessKey && accessKey !== 'YOUR_ACCESS_KEY') {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            service: formData.service,
            timeline: formData.timeline,
            message: formData.message,
            subject: `New Project Inquiry from ${formData.name} (${formData.service})`,
            from_name: 'Ananth Ram S Portfolio'
          }),
        });

        const result = await response.json();
        if (result.success) {
          setIsSubmitted(true);
          setIsSubmitting(false);
          return;
        }
      } catch (error) {
        console.error('Web3Forms submit error:', error);
      }
    }

    // Direct Mailto Fallback
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name} (${formData.service})`);
    const body = encodeURIComponent(
      `Hi Ananth,\n\nI would like to discuss a project with you!\n\nService Requested: ${formData.service}\nPreferred Timeline: ${formData.timeline}\n\nProject Details:\n${formData.message}\n\nFrom,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Freelance Invite Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-8 sm:p-12 mb-16 bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-600 text-white text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-mono-tech font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Available for Freelance & Contract Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Have a Project in Mind? Let's Talk.
            </h2>
            <p className="text-sky-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you need a full-stack web application, a custom Power BI analytics dashboard, or an AI data pipeline — select your required service below to start the conversation.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info & 1-Click Copy Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                Reach out directly via email, phone, or LinkedIn to discuss your project requirements.
              </p>

              <div className="space-y-4">
                {/* Email Card */}
                <div className="bento-card p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-tech font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {PERSONAL_INFO.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2.5 rounded-xl glass-panel text-slate-500 hover:text-sky-400 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Mobile Phone Card */}
                <div className="bento-card p-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono-tech font-bold text-slate-400 uppercase tracking-wider">Direct Mobile</span>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white font-mono-tech">
                        {PERSONAL_INFO.phone}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2.5 rounded-xl glass-panel text-slate-500 hover:text-emerald-400 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="bento-card p-4 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech font-bold text-slate-400 uppercase tracking-wider">Base Location</span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="pt-4">
              <span className="text-xs font-mono-tech font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Professional Networks
              </span>
              <div className="flex items-center gap-3 font-mono-tech">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bento-card flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bento-card flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-purple-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Service Inquiry Booking Form (No Prices) */}
          <div className="lg:col-span-7">
            <div className="bento-card p-6 sm:p-8 border border-sky-500/20">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-sky-500 dark:text-sky-400 mb-6">
                <MessageSquare className="w-4 h-4" />
                <span>Project Service Inquiry Form</span>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Inquiry Prepared Successfully!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    Thank you for reaching out. An email draft has been generated for you to send. I will respond to your message promptly to start our discussion.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-tech font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Required Service *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 bg-transparent"
                      >
                        <option value="Full-Stack Web Development" className="bg-slate-900 text-white">Full-Stack Web Development</option>
                        <option value="UI/UX Design & Architecture" className="bg-slate-900 text-white">UI/UX Design & Architecture</option>
                        <option value="Data Analytics & Power BI" className="bg-slate-900 text-white">Data Analytics & Power BI</option>
                        <option value="AI & NLP Solution" className="bg-slate-900 text-white">AI & NLP Solution</option>
                        <option value="Freelance Consultation" className="bg-slate-900 text-white">Freelance Project Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech font-bold text-slate-700 dark:text-slate-300 mb-1">
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500 bg-transparent"
                      >
                        <option value="Standard Sprint (1-2 Weeks)" className="bg-slate-900 text-white">Standard Sprint (1-2 Weeks)</option>
                        <option value="Express Delivery (3-5 Days)" className="bg-slate-900 text-white">Express Delivery (3-5 Days)</option>
                        <option value="Flexible / Ongoing Contract" className="bg-slate-900 text-white">Flexible / Ongoing Contract</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Project Goals & Discussion Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl glass-panel border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
                      placeholder="Share your project vision, features, or questions to get the conversation started..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition-all font-mono-tech disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="animate-spin text-sm">⏳</span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    <span>{isSubmitting ? 'Sending Inquiry...' : 'Send Project Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
