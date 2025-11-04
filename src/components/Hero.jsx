import React from 'react';
import { Building2, MapPin, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 opacity-90" />
      <div className="absolute inset-0" aria-hidden>
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
          <defs>
            <linearGradient id="gridGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#gridGradient)" strokeWidth="0.5">
            {Array.from({ length: 40 }).map((_, i) => (
              <path key={`h-${i}`} d={`M0 ${i * 20} H800`} />
            ))}
            {Array.from({ length: 40 }).map((_, i) => (
              <path key={`v-${i}`} d={`M${i * 20} 0 V800`} />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative container mx-auto px-6 py-24 sm:py-28 lg:py-32 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-sm mb-6 ring-1 ring-white/20">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              Building trust across South India since 2008
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
              Premium Construction & Urban Development
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
              We deliver end‑to‑end construction for residential, commercial and mixed‑use spaces with uncompromising quality, safety, and on‑time delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white text-blue-700 px-5 py-3 font-medium shadow hover:shadow-lg transition">
                Get a project quote
              </a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-medium ring-1 ring-white/40 text-white hover:bg-white/10 transition">
                View our projects
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/90">
              <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                <div className="text-2xl font-semibold">16+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                <div className="text-2xl font-semibold">1.2M+</div>
                <div className="text-sm">Sq.ft Delivered</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                <div className="text-2xl font-semibold">40+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 ring-1 ring-white/10">
                <div className="text-2xl font-semibold">100%</div>
                <div className="text-sm">On-time Handover</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="relative rounded-2xl bg-white/10 ring-1 ring-white/20 p-6 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-white/10 ring-1 ring-white/10">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-white/80">Headquartered in</p>
                  <p className="font-medium">Bengaluru, Karnataka</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RegionStat icon={<MapPin className="h-4 w-4" />} title="Bengaluru" completed="18" ongoing="1" />
                <RegionStat icon={<MapPin className="h-4 w-4" />} title="Kerala" completed="15" ongoing="2" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop"
                alt="Construction site"
                className="mt-6 h-56 w-full object-cover rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const RegionStat = ({ icon, title, completed, ongoing }) => {
  return (
    <div className="rounded-xl bg-white/10 ring-1 ring-white/15 p-4">
      <div className="flex items-center gap-2 text-white/90">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-emerald-500/20 text-emerald-100 p-3">
          <div className="text-2xl font-semibold">{completed}</div>
          <div>Completed</div>
        </div>
        <div className="rounded-lg bg-amber-500/20 text-amber-100 p-3">
          <div className="text-2xl font-semibold">{ongoing}</div>
          <div>Ongoing</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
