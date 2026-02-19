
import React from 'react';
import { BENEFITS, IconMap } from '../constants';

const WhyChoose: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">The Scholaro Advantage</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Scholaro?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Built with the latest technologies to ensure your school stays ahead of the digital curve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BENEFITS.map((benefit) => {
            const Icon = IconMap[benefit.icon];
            return (
              <div key={benefit.id} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-blue-400">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
