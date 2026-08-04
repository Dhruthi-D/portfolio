'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import resumeData from '../../../resume_data.json';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="card p-8 border-4 border-black dark:border-white/40">
          <CheckCircle className="w-16 h-16 text-black dark:text-white mx-auto mb-6" />
          <h1 className="text-3xl font-black font-headline text-black dark:text-white mb-4 uppercase">
            MESSAGE DELIVERED SUCCESSFULLY
          </h1>
          <p className="text-sm font-serif italic text-[#1c1917]/85 dark:text-[#eae6df]/85 mb-8">
            &quot;Your letter has been submitted to the correspondence ledger. I will review and reply within 24 hours.&quot;
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Section V • Correspondence</span>
        <h1 className="text-4xl md:text-5xl font-black font-headline text-black dark:text-white uppercase mt-1 pb-4 border-b border-black dark:border-white/20">
          WRITE TO THE EDITOR
        </h1>
        <p className="text-sm md:text-base font-serif italic text-[#1c1917]/70 dark:text-[#eae6df]/70 max-w-2xl mx-auto mt-4 leading-relaxed">
          &quot;Submit inquiries, questions, or invitations for collaboration directly to the digital correspondence desk.&quot;
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-black font-headline text-black dark:text-white uppercase mb-4">
              CORRESPONDENCE DIRECTORY
            </h2>
            <p className="text-xs leading-relaxed text-[#1c1917]/80 dark:text-[#eae6df]/80 font-serif text-justify font-semibold">
              Please use the official channels listed below for direct letters or digital correspondence. Hand-typed responses are generally dispatched within one solar day.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-xs font-serif font-bold uppercase tracking-wider">
            <div className="flex items-center space-x-3 py-2 border-b border-black/10 dark:border-white/5">
              <Mail className="w-4 h-4 text-black dark:text-white" />
              <div className="flex flex-col">
                <span className="text-[9px] text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Electronic Mail</span>
                <a href={`mailto:${resumeData.personal.email}`} className="hover:underline lowercase font-bold select-all">
                  {resumeData.personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2 border-b border-black/10 dark:border-white/5">
              <Phone className="w-4 h-4 text-black dark:text-white" />
              <div className="flex flex-col">
                <span className="text-[9px] text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Telephone Line</span>
                <a href={`tel:${resumeData.personal.phone}`} className="hover:underline">
                  {resumeData.personal.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3 py-2 border-b border-black/10 dark:border-white/5">
              <MapPin className="w-4 h-4 text-black dark:text-white" />
              <div className="flex flex-col">
                <span className="text-[9px] text-[#1c1917]/60 dark:text-[#eae6df]/60 font-headline">Stationed Office</span>
                <span>{resumeData.personal.location}</span>
              </div>
            </div>
          </div>

          {/* Social Directory */}
          <div className="space-y-4">
            <h3 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white">
              Public Registers & Logs
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold uppercase font-headline">
              <a href={resumeData.social.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                [ GITHUB ]
              </a>
              <a href={resumeData.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                [ LINKEDIN ]
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 card border-2 border-black dark:border-white/40 p-6">
          <h2 className="text-2xl font-black font-headline text-black dark:text-white uppercase mb-6 text-center border-b border-black/15 dark:border-white/10 pb-2">
            SUBMIT DISPATCH INQUIRY
          </h2>
          
          {error && (
            <div className="mb-6 p-4 border border-red-500/40 text-red-700 dark:text-red-300 text-xs font-serif">
              <p>{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs font-bold font-headline uppercase tracking-wider text-black dark:text-white mb-1">
                Name of Sender *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-2 py-2 border-b border-black dark:border-white bg-transparent text-black dark:text-white font-serif text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="Hon. Full Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold font-headline uppercase tracking-wider text-black dark:text-white mb-1">
                Return Mail Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-2 py-2 border-b border-black dark:border-white bg-transparent text-black dark:text-white font-serif text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="your.address@domain.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold font-headline uppercase tracking-wider text-black dark:text-white mb-1">
                Subject of Notice *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-2 py-2 border-b border-black dark:border-white bg-transparent text-black dark:text-white font-serif text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="e.g. Collaboration Request"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold font-headline uppercase tracking-wider text-black dark:text-white mb-1">
                Content of Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-2 py-2 border-b border-black dark:border-white bg-transparent text-black dark:text-white font-serif text-sm focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                placeholder="Provide detailed description..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>SENDING TRANSMISSION...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT DISPATCH</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Additional Information */}
      <section className="mt-20 border-t-4 border-double border-black dark:border-white/40 pt-10 text-center">
        <h3 className="font-headline font-black text-xl text-black dark:text-white uppercase mb-4">
          OPERATIONAL READINESS
        </h3>
        <p className="text-xs text-justify md:text-center font-serif text-[#1c1917]/70 dark:text-[#eae6df]/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          I am currently accepting applications for internships, joint research, and professional engineering dispatches. Direct correspondence remains open continuously.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-4 border border-black/10 dark:border-white/5">
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white mb-2">EXPECTED LATENCY</h4>
            <p className="text-[10px] text-[#1c1917]/70 dark:text-[#eae6df]/70 uppercase tracking-widest">Dispatches in 24 Hours</p>
          </div>
          <div className="text-center p-4 border border-black/10 dark:border-white/5">
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white mb-2">ENGAGEMENT RATE</h4>
            <p className="text-[10px] text-[#1c1917]/70 dark:text-[#eae6df]/70 uppercase tracking-widest">100% Response Record</p>
          </div>
          <div className="text-center p-4 border border-black/10 dark:border-white/5">
            <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-black dark:text-white mb-2">AVAILABILITY</h4>
            <p className="text-[10px] text-[#1c1917]/70 dark:text-[#eae6df]/70 uppercase tracking-widest">Open to Inquiries</p>
          </div>
        </div>
      </section>
    </div>
  );
}
