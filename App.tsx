
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <WhyChoose />
        <DashboardPreview />
        <Pricing />
        
        {/* Enhanced CTA Banner Section */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto relative overflow-hidden bg-slate-900 rounded-[3rem] py-20 px-8 md:px-16 text-center shadow-2xl">
            {/* Soft decorative background glows for depth without sacrificing legibility */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                Transform Your School <span className="text-blue-400 font-black">Administration</span> Today
              </h2>
              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join 500+ institutions that have streamlined their operations with Scholaro's intelligent ERP solution.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="https://demo.scholaro.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-xl hover:-translate-y-1 text-center"
                >
                  View Live Demo
                </a>
                <a 
                  href="#contact"
                  className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-sm text-center"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
