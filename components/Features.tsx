
import React from 'react';
import { FEATURES, IconMap } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-xs">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900">A Modular Ecosystem</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Switch on the features you need. Our architecture is built to scale from small academies to large university networks.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Featured Large Card */}
          <div className="md:col-span-2 md:row-span-2 glass-card p-10 rounded-[2.5rem] flex flex-col justify-between fancy-border group">
            <div>
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <IconMap.Users size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4">Complete Student Lifecycle</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                From initial inquiry to alumni status, track every academic milestone, behavior report, and health record in a unified, beautiful interface.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
              <span className="font-bold text-blue-600">Explore Module</span>
              <div className="flex -space-x-2">
                 {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>)}
              </div>
            </div>
          </div>

          {/* Regular Bento Cards */}
          {FEATURES.slice(1, 5).map((feature, idx) => {
            const Icon = IconMap[feature.iconName];
            return (
              <div 
                key={feature.id} 
                className="md:col-span-1 glass-card p-8 rounded-[2rem] hover:bg-white transition-all duration-500 group border border-slate-100/50"
              >
                <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
          
          <div className="md:col-span-2 glass-card p-8 rounded-[2.5rem] flex items-center gap-8 group">
             <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
                <IconMap.BarChart3 size={40} />
             </div>
             <div>
                <h4 className="text-2xl font-black text-slate-900 mb-1">Advanced Analytics</h4>
                <p className="text-slate-500">100+ automated reports for strategic institutional growth.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
