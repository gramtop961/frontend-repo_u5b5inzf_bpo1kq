import React from 'react';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import ContactCTA from './components/ContactCTA.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Hero />
      <Projects />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
