import React from 'react';
import { Phone, Mail, FileSpreadsheet } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="relative container mx-auto px-6">
        <div className="rounded-2xl bg-neutral-900 text-white p-8 sm:p-10 overflow-hidden ring-1 ring-neutral-800">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" aria-hidden />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">Let’s build something remarkable</h3>
              <p className="mt-2 text-white/80 max-w-2xl">
                Share your requirements and we’ll provide a comprehensive proposal with timelines, budgets, and design insights.
              </p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/90">
                <li className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-3 py-2 rounded-lg"><FileSpreadsheet className="h-4 w-4"/> Detailed BOQs</li>
                <li className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-3 py-2 rounded-lg"><FileSpreadsheet className="h-4 w-4"/> Transparent estimates</li>
                <li className="inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/10 px-3 py-2 rounded-lg"><FileSpreadsheet className="h-4 w-4"/> Value engineering</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto">
              <a href="tel:+919000000000" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-neutral-900 px-5 py-3 font-medium shadow hover:shadow-lg transition">
                <Phone className="h-5 w-5"/> Call us
              </a>
              <a href="mailto:build@yourcompany.com" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow hover:bg-blue-700 transition">
                <Mail className="h-5 w-5"/> Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
