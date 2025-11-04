import React, { useMemo, useState } from 'react';
import { Hammer, Building2, MapPin, ArrowRight } from 'lucide-react';

const allProjects = [
  // Bengaluru - Completed
  {
    id: 'blr-skyline-heights', city: 'Bengaluru', status: 'Completed',
    name: 'Skyline Heights', type: 'Residential High‑rise', year: 2022,
    location: 'Whitefield, Bengaluru',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'blr-tech-park', city: 'Bengaluru', status: 'Completed',
    name: 'Orion Tech Park', type: 'Commercial', year: 2021,
    location: 'Electronic City, Bengaluru',
    image: 'https://images.unsplash.com/photo-1741062206125-e60c2fb96f4c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPcmlvbiUyMFRlY2glMjBQYXJrfGVufDB8MHx8fDE3NjIyMzc4MDd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'blr-green-vistas', city: 'Bengaluru', status: 'Completed',
    name: 'Green Vistas', type: 'Mixed‑use', year: 2020,
    location: 'Yeshwanthpur, Bengaluru',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2074&auto=format&fit=crop'
  },
  // Bengaluru - Ongoing (exactly one)
  {
    id: 'blr-lakeside-residences', city: 'Bengaluru', status: 'Ongoing',
    name: 'Lakeside Residences', type: 'Premium Residential', year: 2025,
    location: 'Sarjapur Road, Bengaluru',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop'
  },
  // Kerala - Completed
  {
    id: 'kerala-backwater-villas', city: 'Kerala', status: 'Completed',
    name: 'Backwater Villas', type: 'Resort Villas', year: 2021,
    location: 'Alappuzha, Kerala',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 'kerala-heritage-square', city: 'Kerala', status: 'Completed',
    name: 'Heritage Square', type: 'Commercial', year: 2020,
    location: 'Kochi, Kerala',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop'
  },
  // Kerala - Ongoing
  {
    id: 'kerala-riverfront-habitat', city: 'Kerala', status: 'Ongoing',
    name: 'Riverfront Habitat', type: 'Residential Community', year: 2025,
    location: 'Thrissur, Kerala',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'kerala-marine-drive-towers', city: 'Kerala', status: 'Ongoing',
    name: 'Marine Drive Towers', type: 'Mixed‑use', year: 2024,
    location: 'Kochi, Kerala',
    image: 'https://images.unsplash.com/photo-1753806390462-580d7a625f76?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXJpbmUlMjBEcml2ZSUyMFRvd2Vyc3xlbnwwfDB8fHwxNzYyMjM3ODA3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
];

const Projects = () => {
  const [region, setRegion] = useState('Bengaluru');
  const [status, setStatus] = useState('All');

  const projects = useMemo(() => {
    return allProjects.filter(p => p.city === region && (status === 'All' || p.status === status));
  }, [region, status]);

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200 px-3 py-1.5 text-sm">
              <Hammer className="h-4 w-4" /> Our Work
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
              Signature Projects Across South India
            </h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Explore a curated selection of completed and ongoing developments in Bengaluru and Kerala.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setRegion('Bengaluru')} className={`px-4 py-2 rounded-lg ring-1 transition ${region==='Bengaluru' ? 'bg-blue-600 text-white ring-blue-600' : 'bg-white text-neutral-800 ring-neutral-200 hover:bg-neutral-50'}`}>
              Bengaluru
            </button>
            <button onClick={() => setRegion('Kerala')} className={`px-4 py-2 rounded-lg ring-1 transition ${region==='Kerala' ? 'bg-blue-600 text-white ring-blue-600' : 'bg-white text-neutral-800 ring-neutral-200 hover:bg-neutral-50'}`}>
              Kerala
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <FilterChip label="All" active={status==='All'} onClick={() => setStatus('All')} />
          <FilterChip label="Completed" active={status==='Completed'} onClick={() => setStatus('Completed')} />
          <FilterChip label="Ongoing" active={status==='Ongoing'} onClick={() => setStatus('Ongoing')} />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <article key={p.id} className="group rounded-2xl bg-white ring-1 ring-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover" loading="lazy" />
                <span className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow ${p.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                  <span className={`h-2 w-2 rounded-full ${p.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="text-sm text-neutral-500">{p.year}</span>
                </div>
                <div className="mt-1 text-sm text-neutral-600">{p.type}</div>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-700">
                  <MapPin className="h-4 w-4 text-neutral-400" />
                  {p.location}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-blue-700">
                    <Building2 className="h-4 w-4" />
                    <span className="text-sm">Premium build quality</span>
                  </div>
                  <button className="inline-flex items-center gap-1 text-sm text-blue-700 hover:gap-2 transition">
                    View details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="mt-10 rounded-xl bg-neutral-50 ring-1 ring-neutral-200 p-8 text-center text-neutral-600">
            No projects match the selected filters.
          </div>
        )}
      </div>
    </section>
  );
};

const FilterChip = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-full text-sm ring-1 transition ${active ? 'bg-neutral-900 text-white ring-neutral-900' : 'bg-white text-neutral-800 ring-neutral-200 hover:bg-neutral-50'}`}
  >
    {label}
  </button>
);

export default Projects;
