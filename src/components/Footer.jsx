import React from 'react';
import { MapPin, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold">BlueStone Constructions</span>
            </div>
            <p className="mt-3 text-sm text-neutral-600 max-w-sm">
              A full‑service construction partner for residences, offices and community spaces across Karnataka and Kerala.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Locations</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-neutral-400"/> Bengaluru, Karnataka</li>
              <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-neutral-400"/> Kochi, Kerala</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>build@yourcompany.com</li>
              <li>+91 90000 00000</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} BlueStone Constructions. All rights reserved.</p>
          <p>ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
