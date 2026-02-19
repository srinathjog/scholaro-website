
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
    <div className="min-h-screen selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* Modern Divider / Logo Cloud */}
        <section className="py-12 border-y border-slate-100 bg-white/30 backdrop-blur-sm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="text-2xl font-black italic tracking-tighter">EDUCLOUD</div>
             <div className="text-2xl font-black italic tracking-tighter">CAMPUS.PRO</div>
             <div className="text-2xl font-black italic tracking-tighter">GLOBAL_ED</div>
             <div className="text-2xl font-black italic tracking-tighter">ACADEMIX</div>
             <div className="text-2xl font-black italic tracking-tighter">LEARNCORE</div>
          </div>
        </section>

        <About />
        <Features />
        <WhyChoose />
        <DashboardPreview />
        <Pricing />
        
        {/* Ultra-Fancy Bottom CTA */}
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-emerald-500 to-indigo-600 rounded-[3.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-white rounded-[3.5rem] py-24 px-8 md:px-24 text-center overflow-hidden border border-white/50 shadow-2xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
              
              <div className="relative z-10 space-y-10">
                <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight">
                  Ready to upgrade <br /> your <span className="gradient-text">Institution?</span>
                </h2>
                <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">
                  Experience why top educational leaders are migrating their entire ecosystems to Scholaro.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                  <a 
                    href="https://demo.scholaro.co" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-[1.5rem] font-black text-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 hover:-translate-y-2 flex items-center justify-center"
                  >
                    View Live Demo
                  </a>
                  <a 
                    href="#contact"
                    className="w-full sm:w-auto px-12 py-6 bg-slate-50 border border-slate-200 text-slate-900 rounded-[1.5rem] font-black text-2xl hover:bg-white transition-all text-center"
                  >
                    Contact Sales
                  </a>
                </div>
                
                <div className="pt-10 flex items-center justify-center gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                   <span>No Credit Card</span>
                   <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                   <span>14-Day Free Trial</span>
                   <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                   <span>Instant Setup</span>
                </div>
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
